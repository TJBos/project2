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

router.get('/data', auth, (req, res) => {
  Country.find({ username: req.session.username }, (error, data) => {
      res.json(data);
  });
});


//INDEX
router.get('/', auth, (req,res) => {
  Country.find({ username: req.session.username}, (err, country) => {
      res.render('world/index.jsx', { country } ); // country is an array of objects, with each object a country
  });
  
});


//NEW and CREATE
router.get('/new', auth, (req, res) => {
  res.render('world/New.jsx');
});


router.post('/', auth, (req,res) => {
  req.body.username = req.session.username;
  Country.create(req.body);
  res.redirect('/world');
});


//DELETE

router.delete('/:id', auth, (req, res) => {
  Country.findByIdAndRemove(req.params.id, (err, result) => {
      res.redirect('/world');
  });
});

//EDIT and UPDATE TEXT INFO

router.get('/:id/edit', auth, (req, res) => {
  Country.findById(req.params.id, (err, country) => {
      res.render('world/Edit.jsx', { country }) //country is an object
  });
});

router.put('/:id', auth, (req, res) => {

  req.body.username = req.session.username;
  Country.findById(req.params.id, (err, result) => {
    req.body.photos = result.photos
    Country.findByIdAndUpdate(result.id, req.body, (err, result) => {
        res.redirect('/world');
    });
  });
});


//EDIT and UPDATE PHOTOS

router.get('/:id/editimg', auth, (req, res) => {
  Country.findById(req.params.id, (err, country) => {
      res.render('world/Editphotos.jsx', { photos: country.photos, country: country }); //array
  });
});

router.delete('/:id/:index', auth, (req, res) => {
  Country.findById(req.params.id, (err, country) => {
    country.photos.splice([req.params.index], 1)
    Country.findByIdAndUpdate(req.params.id, country, (err, result) => {
      res.redirect(`/world/${req.params.id}`);
    })
  })
})

router.get('/:id/addphoto', auth, (req, res) => {
  Country.findById(req.params.id, (err, country) => {
    res.render('world/Addphoto.jsx', { country });
  })
})

router.post('/:id', auth, (req, res) => {
  const newPhoto = req.body.photo
  Country.findById(req.params.id), (err, country) => {
    country.photos.push(newPhoto);
    res.redirect(`/world/${req.params.id}`);
  }
})


//SHOW

router.get('/:id', auth, (req, res) => {
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
