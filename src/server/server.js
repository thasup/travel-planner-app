var path = require('path');
const dotenv = require('dotenv');
dotenv.config();

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

// Defines the port number 
const port = 8888;

/* Spin up the server*/
const server = app.listen(port, listening);

function listening () {
    console.log(`Server is running!`);
    console.log(`Running on localhost: ${port}`);
};

// Declare API Keys
const weatherBit = process.env.API_KEY_WEATHERBIT;
const openWeather = process.env.API_KEY_OPENWEATHER;
const geoName = process.env.API_KEY_GEONAME;
const pixaBay = process.env.API_KEY_PIXABAY;
console.log(weatherBit, geoName, pixaBay);

// GET Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

// GET Route - GeoName API
app.post('/place', async(req, res) => {
    const place = req.body.inputPlace;
    const user = req.body.inputUsername;
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${place}&fuzzy=0.8&maxRows=1&username=${geoName}`);
    // const response = await fetch(`http://api.geonames.org/searchJSON?q=rome&fuzzy=0.8&maxRows=10&username=thasup`);
    // console.log(response);

    try {
        const data = await response.json();
        // console.log(`data : ${data}`);
        res.send(data);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - WeatherBit API
app.post('/forecast', async(req, res) => {
    const latitude = req.body.inputLat;
    const longitude = req.body.inputLng;
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${weatherBit}`);
    // console.log(response);

    try {
        const data = await response.json();
        // console.log(`data : ${data}`);
        res.send(data);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - PixaBay API
app.post('/image', async(req, res) => {
    const City = req.body.city;
    const Country = req.body.country;
    const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${City}&image_type=photo&orientation=horizontal`);
    // console.log(response);

    // (function waitMe() {
    //     const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${City}&image_type=photo&orientation=horizontal`);

    //     if (totalHits = 0) {
    //         const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${Country}&image_type=photo&orientation=horizontal`);
    //     } else {
    //         const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${City}&image_type=photo&orientation=horizontal`);
    //     };
    // })();

    try {
        const data = await response.json();
        // console.log(`data : ${data}`);
        res.send(data);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - PixaBay API
app.post('/countryImage', async(req, res) => {
    const City = req.body.city;
    const Country = req.body.country;
    const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${Country}&image_type=photo&orientation=horizontal`);
    // console.log(response);

    try {
        const data = await response.json();
        // console.log(`data : ${data}`);
        res.send(data);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});