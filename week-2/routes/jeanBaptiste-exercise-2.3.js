/*
=======================================
;Title: Exercise 2.3
;Author: Sarah Jean Baptiste
;Date: 03/27/2021
;Description: Routes
=======================================
*/

//Variable declaration for express
var express = require('express');

//Variable declaration for HTTP
var http = require('http');

//Start a new express application
var app = express();

//Routes
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');
});

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n'); //Error for bad requests.
});

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});