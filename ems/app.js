/*
=======================================================
  Title: jeanBaptiste-assignment-3.4.js
  Author: Professor Cross
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Putting it all together
========================================================
*/

// Requirement statements. 
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var helmet = require("helmet");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Employee = require("./models/employee");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// Link to mongoDB. 
var mongoDB = "mongodb+srv://admin:5975@buwebdev-cluster-1.levpe.mongodb.net/ems?authSource=admin&replicaSet=atlas-sc0j04-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

// Mongoose connection. 
mongoose.connect(mongoDB, {
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to MongoDB instance");
});

//Set the Variable for Express and CSRF. 
var app = express();
var csrfProtection = csrf({cookie: true});


//Set the view and view engine.
app.set('views', path.resolve(__dirname, 'views'));

var publicDir = require('path').join(__dirname, '/public');

app.use(express.static(publicDir));

app.set('view engine', 'ejs');

//Set to port 4000. 
app.set("port", process.env.PORT || 4000)

//Set the logger and app.use
app.use(logger('short'));

app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);


app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});


//Routing statements

// Home page. 
app.get('/', function(request, response){
    response.render('index',{
        message: "XSS Prevention Example",
        title: "Home"
    });
}); 


// New employee page 
app.get('/new', function(request, response){
    response.render('new',{
        title: "New",
        message: "Please enter your first and last name..."
    });
}); 

// First and last name forms with error messages. 
app.post("/process", function(request, response) {
    console.log(request.body);
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

// Employee listing page. 
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
        response.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

// View individual employees information with redirect.
app.get("/view/:queryName", function(request, response) {
    var queryName = request.params.queryName;
  
    Employee.find({'firstName': queryName}, function(error, employees) {
        if (error) throw error;
        if (employees.length > 0) {
            response.render("view", {
                title: 'EMS | View',
                employee: employees
            })
        }
        else {
          response.redirect('/list');
        }
    });
  });

//Create server and listen on port 4000.
http.createServer(app).listen(app.get("port"), function() {
    console.log('Application started and listening on port %s', + app.get("port"))
});