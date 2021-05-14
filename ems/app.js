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
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

//Set the Variable for Express. 
var app = express();

var mongoose = require("mongoose");

var csrfProtection = csrf({cookie: true});

var Employee = require("./models/employee");

// mongoose connection

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

//Set the logger and app.use
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});


//Routing
app.get('/', function(request, response){
    response.render('index',{
        message: "XSS Prevention Example",
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

//get the new file. 
app.get('/new', function(request, response){
    response.render('new',{
        title: "New",
        message: "Please enter your first and last name..."
    });
}); 

// First and last name forms. 
app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    if (!request.body.firstName) {
        response.status(400).send("You must enter a first name.");
        return; 
    }

    if (!request.body.lastName) {
        response.status(400).send("You must enter a last name.");
        return; 
    }

    var firstName = request.body.firstName;
    var lastName = request.body.lastName;

    var employee = new Employee({
        firstName: firstName,
        lastName: lastName
    });

    employee.save(function (error) {
        if (error) throw error;
        console.log(firstName + lastName + " your entry is saved!")
    });
    response.redirect("/");

});

// get list page. 
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
        response.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

var employee = new Employee;

app.get("/view/:queryName", function(request, response) {
    var queryName = request.params.queryName;
  
    Employee.find({'firstName': queryName}, function(error, employees) {
        if (error) throw error;
        if (employees.length > 0) {
            response.render('view', {
                title: 'EMS | View',
                employee: employees
            })
        }
        else {
          response.redirect('/list');
        }
    });
  });

//Create server and listen on port 5000.
http.createServer(app).listen(process.env.PORT || 5000, function() {
    console.log('Application started and listening on port %s', process.env.PORT || 5000)
});