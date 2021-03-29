/*
=======================================
;Title: Assignment 2.4
;Author: Sarah Jean Baptiste
;Date: 03/27/2021
;Description: Assignment 2.4
=======================================
*/

//Variable declaration for HTTP.
var http = require("http");

//Variable declaration for express.
var express = require("express");

var path = require("path");
const { brotliCompress } = require("zlib");

//Start a new express application
var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tell Express the views are in the 'views' directory. 

app.set("view engine", "ejs"); //Tell Express to use EJS view engine. 

app.get("/", function(request, response){
    response.render("index",{
        firstName: "Sarah",
        lastName: "Jean Baptiste",
        address: "123 Mickey Mouse Ln."
    });
});

// Create server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080");
});

