/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('website'));

// Defines the port number 
const port = 8000;

/* Spin up the server*/
const server = app.listen(port, listening);

function listening () {
    console.log(`Server is running!`);
    console.log(`Running on localhost: ${port}`);
};