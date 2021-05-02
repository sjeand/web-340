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

var mongoose = require("mongoose");

var Employee = require("./models/employee");

// mLab connection

var mongoDB = "mongodb+srv://admin:5975@buwebdev-cluster-1.levpe.mongodb.net/ems?authSource=admin&replicaSet=atlas-sc0j04-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(mongoDB, {

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to MongoDB instance");

});



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


//Create server and listen on port 3002.
http.createServer(app).listen(5000, function() {
    console.log('Application started and listening on port %s', 5000)
});