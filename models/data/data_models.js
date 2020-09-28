// define schema for database items here

const mongoose  = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String },
    places: { type: Array },
    photos: { type: Array }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Product;
