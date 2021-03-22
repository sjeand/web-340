/*
=======================================
;Title: Assignment 1.5
;Author: Sarah Jean Baptiste
;Date: 03/21/2021
;Description: node.js in action
=======================================
*/

//Variable declaration for http.
var http = require("http");

// Function to process request and display message.
function processRequest(req, res){
    var body = "This message will appear on my browser!"; 
        var contentLength = body.length;
        res.writeHead(200,{
            'Content-Length':contentLength,
            'Content-type':'text/plain'
        });
        res.end(body);
}
//Variable to declare 's' to create server. 
var s = http.createServer(processRequest);
s.listen(8080);