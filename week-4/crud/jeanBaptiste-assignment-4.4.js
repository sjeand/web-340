/*
=======================================================
  Title: jeanBaptiste-assignment-4.3.js
  Author: Professor Cross
  Date: 04/10/2021
  Modified by: Sarah Jean Baptiste
  Description: Crud
========================================================
*/

// Import libraries
const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

// Get request to display message "API invoked as HTTP GET request"
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

// Put request to display message "API invoked as HTTP PUT request"
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

// Post request to display message "API invoked as HTTP POST request"
app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

// Delete request to display message "API invoked as HTTP DELETE request"
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

// Create server on port 3000
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});