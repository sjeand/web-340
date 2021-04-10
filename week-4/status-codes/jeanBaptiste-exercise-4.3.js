/*
=======================================================
  Title: jeanBaptiste-exercise-4.3.js
  Author: Professor Cross
  Date: 04/10/2021
  Modified by: Sarah Jean Baptiste
  Description: Status Codes
========================================================
*/

// Import libraries
var express = require ('express')
var http = require('http');


var app = express();


// Get request using status codes

// Status code 404, error - not found. 
app.get('/not-found' ,function(req, res){

    res.status(404);
    
    res.json({
        error: 'Resource not found.'
    });

});

//Status code 200 - ok, page loaded correctly.
app.get('/ok' ,function(req, res){

    res.status(200);
    
    res.json({
        error: 'Page loaded correctly.'
    });

});

//Status code 501 - page not-implemented.
app.get('/not-implemented' ,function(req, res){

    res.status(501);
    
    res.json({
        error: 'Page not implemented.'
    });

});

// Create server on port 4000
http.createServer(app).listen(4000, function(){
    console.log('Application started and listening on port 4000') // Message to recognize server is started and listening on port 4000. 
});