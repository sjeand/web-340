/*
=======================================================
  Title: jeanBaptiste-assignment-3.4.js
  Author: Professor Cross
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Putting it all together
========================================================
*/

//Requirement statements. 
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');

//Set the Variable for Express. 
var app = express();

//Set the view and view engine.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Set the logger. 
app.use(logger('short'));


//get the index file. 
app.get('/index', function(request, response){
    response.render('index',{
        title: "Home"
    });
}); 

//get the about file. 
app.get('/about', function(request, response){
    response.render('about',{
        title: "About"
    });
}); 

//get the contact file. 
app.get('/contact', function(request, response){
    response.render('contact',{
        title: "Contact Us"
    });
}); 

//get the contact file. 
app.get('/list', function(request, response){
    response.render('list',{
        title: "Employee Records"
    });
}); 

//get the contact file. 
app.get('/butler', function(request, response){
    response.render('butler',{
        title: "Jimmy Butler"
    });
}); 

//get the about file. 
app.get('/james', function(request, response){
    response.render('james',{
        title: "Lebron James"
    });
}); 

//get the about file. 
app.get('/curry', function(request, response){
    response.render('curry',{
        title: "Steph Curry"
    });
}); 

//get the about file. 
app.get('/davis', function(request, response){
    response.render('davis',{
        title: "Anthony Davis"
    });
}); 

//Create server and listen on port 3002.
http.createServer(app).listen(5000, function() {
    console.log('Application started and listening on port %s', 5000)
});