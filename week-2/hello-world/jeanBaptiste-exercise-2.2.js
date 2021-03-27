/*
=======================================
;Title: Exercise 2.2
;Author: Sarah Jean Baptiste
;Date: 03/27/2021
;Description: Hello World
=======================================
*/

//Variable declaration for express
var express = require('express');

//Variable declaration for HTTP
var http = require('http');

//Start a new express application
var app = express();

app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})
// Create server on port 8080
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});