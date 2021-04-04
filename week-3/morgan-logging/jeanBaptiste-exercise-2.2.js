/*
=======================================================
  Title: jeanBaptiste-exercise-2.2.js
  Author: Professor Cross
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Morgan Logging Intro
========================================================
*/

//Require statements. 
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//Set the Variable for Express.
var app = express();

//Set the view and view engine.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set the logger. 
app.use(logger('dev'));

//Get request and a return response. 
app.get('/', function(req, res){
    res.render('index', {
        message: "I am using Morgan Logging!"
    });
});

//Create server and listen on port 5000.
http.createServer(app).listen(5000, function() {
    console.log('Application started and listening on port %s', 5000)
});