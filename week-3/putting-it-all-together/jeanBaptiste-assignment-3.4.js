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
const { response } = require('express');

//Set the Variable for Express.
var app = express();

//Set the view and view engine.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set the logger. 
app.use(logger('short'));

//get the index file with a message of home page. 
app.get('/index', function(request, response){
    response.render('index',{
        message: "home page"
    });
});

//Get the about file with a message of about page. 
app.get('/about', function(request, response){
    response.render('about',{
        message: "about page"
    });  
});

//Get the contact file with a message of contact page. 
app.get('/contact', function(request, response){
    response.render('contact',{
        message: "contact page"
    });  
});

//Get the products file with a message of products page. 
app.get('/products', function(request, response){
    response.render('products',{
        message: "products page"
    });  
});

//Create server and listen on port 9000.
http.createServer(app).listen(9000, function(){
    console.log("Application started on port 9000");
});
