//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Country = require('../../models/data/data_models');

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////


//View-database-route

router.get('/data', (req, res) => {
  Country.find({}, (error, data) => {
      res.json(data);
  });
});


//INDEX
router.get('/', (req,res) => {
  Country.find({}, (err, country) => {
      res.render('world/index.jsx', { country } ); // country is an array of objects, with each object a country
  });
  
});


//NEW and CREATE
router.get('/new', (req, res) => {
  res.render('world/New.jsx');
});


router.post('/', (req,res) => {
  Country.create(req.body);
  res.redirect('/world');
});


//DELETE

router.delete('/:id', (req, res) => {
  Country.findByIdAndRemove(req.params.id, (err, result) => {
      res.redirect('/world');
  });
});

//EDIT and UPDATE

router.get('/:id/edit', (req, res) => {
  Country.findById(req.params.id, (err, country) => {
      res.render('world/Edit.jsx', { country }) //country is an object
  });
});

router.put('/:id', (req, res) => {
  Country.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      res.redirect('/world');
  });
});


//SHOW

router.get('/:id', (req, res) => {
  Country.findById(req.params.id, (err, country) => {
      res.render('world/Show.jsx', { country }) //country is an object
  });
});


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS
/*
router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});
*/


///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
