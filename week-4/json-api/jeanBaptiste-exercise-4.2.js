/*
=======================================================
  Title: jeanBaptiste-exercise-4.2.js
  Author: Professor Cross
  Date: 04/10/2021
  Modified by: Sarah Jean Baptiste
  Description: JSON APIs
========================================================
*/

// Import libraries
var express = require ('express')
var http = require('http');


var app = express();


// Get request with product info and return
app.get('/product/:id', function(req, res){
    
    var id = parseInt(req.params.id, 10);

    res.json({

        productName: 'Fiddle Leaf Fig',
        productPrice: '$49.99',
        productId: id, 
    });
});

// Create server on port 3000
http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port 3000') // Message to recognize server is started and listening.
});