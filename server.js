'use strict';
// server.js
var express = require('express');
var bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
const cors= require('cors');
var app = express();
app.use(cors());
require('dotenv').config()
var port = 8000;
var pool = require('./config/db_config');
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // Parse application/vnd.api+json as json
require('./routes')(app, {});
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   auth: {
//     user: 'aparnadomb3933@gmail.com',
//     pass: 'Aparna@123',
//   },
// });
// transporter.verify().then(console.log).catch(console.error);
app.listen(port, () => {
  console.log('We are live on ' + port);
});






