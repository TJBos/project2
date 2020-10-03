// enter your beginning data for the database here

const Country = require('./data_models'); 

const countries = [
    {
        username: "toon",
        name: "Italy",
        date: "01/10/2018",
        places: "Rome, Firenze, Sienna",
        description: "Amazing trip, visited lots of monuments and ate really good food",
        photos: ["http://www.travelgrove.com/blog/wp-content/uploads/2011/04/city_rome_italy_19.jpg", "https://www.visitflorence.com/blog/wp-content/uploads/2016/12/campanile-giotto.jpg", "https://www.prestotours.com/wp-content/uploads/2017/06/shutterstock_577589641.jpg"]
    },
    {   
        username: "toon",
        name: "France",
        date: '05/10/2019',
        places: "Paris, Nice, Marseille",
        description: "Visit to the city of lights followed by nice trip along cote d'azur",
        photos: ["http://i.huffpost.com/gen/1709084/images/o-PARIS-facebook.jpg", "https://secure.i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg"]
    },
    {
        username: "toon",
        name: "Australia",
        date: '01/04/2020',
        places: "Syndney, Perth",
        description: "Beautiful beaches, swam with sharks and went to visit nice architecture and musea",
        photos: ["https://www.sydneyhelicopters.com.au/wp-content/uploads/2016/07/sydney-icon-flight-2.jpg", "https://awol.junkee.com/wp-content/uploads/2016/12/TravMedia_Australia_1188129_Direction-Island-LR-3-of-18-e1480889668742.jpg"]

    }
];




module.exports = countries;

