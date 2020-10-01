// enter your beginning data for the database here

const Country = require('./data_models'); 

const countries = [
    {
        name: "United States",
        date: "01/10/2018",
        places: ["New York", "Houston"],
        description: "Amazing trip, visited lots of monuments and ate really good food",
        photos: ["img1", "img2", "img3"]
    },
    {
        name: "France",
        date: '05/10/2019',
        places: ["Paris", "Nice", "Marseille"],
        description: "Visit to the city of lights followed by nice trip along cote d'azur",
        photos: ["img234", "img456"]
    }
];




module.exports = countries;

