/*
=======================================
;Title: Assignment 1.3
;Author: Sarah Jean Baptiste
;Date: 03/15/2021
;Description:
=======================================
*/

var url = require('url');

var parsedURL = url.parse('https://github.com/sjeand?name=jeanBaptiste');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);