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

// App functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Array of classmates. 
var classmates = [
    "Alex",
    "Travis",
    "Angie",
    "Tierre"
];

// Routes.
app.get('/', function(req, res) {
    res.render('index', {
        names: classmates
    });
});

// Create server. 
http.createServer(app).listen(3000, function() {
    console.log('Application started and listen on port 3000') // Message to display application is started and on port 3000.
});

