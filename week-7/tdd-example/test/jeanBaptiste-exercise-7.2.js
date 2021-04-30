/*
=======================================================
  Title: jeanBaptiste-exercise-7.2.js
  Author: Professor Cross
  Date: 04/30/2021
  Modified by: Sarah Jean Baptiste
  Description: Mocha-Chai
========================================================
*/

var assert = require('assert');

describe("String#split", function() {
    it ("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});