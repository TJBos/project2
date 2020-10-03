// define schema for database items here

const mongoose  = require('mongoose');

const countrySchema = new mongoose.Schema({
    username: { type: String, required: true},
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String },
    places: { type: String },
    photos: { type: Array }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
