// Require modules
import path from 'path';
import express, { Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import fetch, { RequestInit } from 'node-fetch';

const customFetch = (url: string, options: RequestInit = {}): Promise<any> => {
  return fetch(url, options);
};

// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

dotenv.config()
// Declare API Keys
const weatherBit = process.env.API_KEY_WEATHERBIT;
const geoName = process.env.API_KEY_GEONAME;
const pixaBay = process.env.API_KEY_PIXABAY;

// Start up an instance of app
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize the main project folder
app.use(express.static('dist'));

// Defines the port number
const port = process.env.PORT || 8888;

// Spin up the server
app.listen(port, () => {
  console.log('Server is running!');
  console.log(`Running on localhost: ${port}`);
});

// GET Route
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

// POST Route - GeoName API
app.post('/place', async (req, res) => {
  const place = req.body.inputPlace;
  const response = await customFetch(`http://api.geonames.org/searchJSON?q=${place}&fuzzy=0.8&maxRows=1&username=${geoName}`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(`error : ${error}`);
  };
});

// POST Route - WeatherBit API
app.post('/forecast', async (req, res) => {
  const { inputLat: latitude, inputLng: longitude} = req.body
  // const latitude = req.body.inputLat;
  // const longitude = req.body.inputLng;
  const response = await customFetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${weatherBit}`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(`error : ${error}`);
  };
});

// POST Route - PixaBay API
app.post('/image', async (req, res) => {
  const City = req.body.city;
  const response = await customFetch(`https://pixabay.com/api/?key=${pixaBay}&q=${City}+travel&image_type=photo&orientation=horizontal`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(`error : ${error}`);
  };
});

// POST Route - PixaBay API
app.post('/countryImage', async (req, res) => {
  const Country = req.body.country;
  const response = await customFetch(`https://pixabay.com/api/?key=${pixaBay}&q=${Country}+travel&image_type=photo&orientation=horizontal`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(`error : ${error}`);
  };
});

// POST Route - RestCountry API
app.post('/countryInfo', async (req, res) => {
  const CountryCode = req.body.countryCode;
  const response = await customFetch(`https://restcountries.com/v2/alpha?codes=${CountryCode}`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(`error : ${error}`);
  };
});
