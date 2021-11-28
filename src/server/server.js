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
const weatherBit = process.env.weatherBit_API_key;
const openWeather = process.env.openWeather_API_key;
const geoName = process.env.geoName_API_key;
const pixaBay = process.env.pixaBay_API_key;

// GET Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

// GET Route - GeoName API
app.post('/place', async(req, res) => {
    const text = req.body.inputPlace;
    const user = req.body.inputUsername;
    const response = await fetch(`https://api.geonames.org/searchJSON?q=${text}&fuzzy=0.8&maxRows=10&username=${user}`);
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
app.post('/pic', async(req, res) => {
    const text = req.body.inputPlace;
    const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${text}&image_type=photo&orientation=horizontal`);
    // console.log(response);

    try {
        const data = await response.json();
        // console.log(`data : ${data}`);
        res.send(data);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});