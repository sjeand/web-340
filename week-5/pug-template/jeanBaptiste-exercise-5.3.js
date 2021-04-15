/*
=======================================================
  Title: jeanBaptiste-exercise-5.2.js
  Author: Professor Cross
  Date: 04/14/2021
  Modified by: Sarah Jean Baptiste
  Description: EJS Templates
========================================================
*/

// Import libraries
var express = require ('express')
var http = require('http');
var path = require('path');
var pug = require('pug');

// App functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// Route
app.get('/', function (req, res) {
    res.render('index', {
        message: 'This is my first time using Pug, is it working?'
    });
});

// Create server. 
http.createServer(app).listen(4000, function() {
    console.log('Application started and listen on port 4000') // Message to display application is started and on port 4000.
});