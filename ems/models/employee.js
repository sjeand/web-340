/*
=======================================================
  Title: employees.js
  Author: Professor Cross
  Date: 04/30/2021
  Modified by: Sarah Jean Baptiste
  Description: Employee
========================================================
*/

// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: { type: String, required: true, unique: true},

});

// define the employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files

module.exports = Employee;

