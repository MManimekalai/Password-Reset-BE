// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//ENABLING ENVIROMENT VARIABLE CONFIGS
require('dotenv').config();
//console.log(process.env);
// // CONFIGURING CORS
// HTTP_SERVER.use(cors());
// CONFIGURING CORS
HTTP_SERVER.use(cors({
  origin: 'https://mmurugesan-password-reset.netlify.app', // Allow requests from your local frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));


// CONFIGURING BODY-PARSER
HTTP_SERVER.use(bodyParser.json());
// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// INJECTING DATABSE CONNECTION
require("./Database/dbConfig");

// BASIC SERVER CONFIGS
const PORT = 5000;

HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});

// Define a simple route for testing
HTTP_SERVER.get('/', (req, res) => {
  res.send('Hello, World!');
});


// INJECTING API SERVER
HTTP_SERVER.use("/", require("./app"));

