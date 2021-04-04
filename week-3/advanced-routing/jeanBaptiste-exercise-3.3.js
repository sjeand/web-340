/*
=======================================================
  Title: jeanBaptiste-exercise-3.3.js
  Author: Professor Cross
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Advanced Routing
========================================================
*/

//Requirement statements. 
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
app.get('/:employeeId', function(req, res){
    var employeeId = parseInt(req.params.employeeId, 10);

    res.render('index', {
        employeeId: employeeId
    });
});

//Create server and listen on port 3002.
http.createServer(app).listen(3002, function() {
    console.log('Application started and listening on port %s', 3002)
});