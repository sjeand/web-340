var fruits = require("../jeanBaptiste-fruits");

var chai = require("chai");

var assert = chai.assert;
/*
=======================================================
  Title: jeanBaptiste-exercise-7.3.js
  Author: Professor Cross
  Date: 04/30/2021
  Modified by: Sarah Jean Baptiste
  Description: Mocha-Chai
========================================================
*/

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');
        

        assert(Array.isArray(f));

    });

});