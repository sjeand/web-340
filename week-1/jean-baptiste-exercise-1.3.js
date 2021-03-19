/*
=======================================
;Title: Assignment 1.3
;Author: Sarah Jean Baptiste
;Date: 03/18/2021
;Description: Week-1 Module
=======================================
*/

// Require URL function.
var url = require('url');

// Parse URL address.
var parsedURL = url.parse('https://github.com/sjeand?name=jeanBaptiste');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);