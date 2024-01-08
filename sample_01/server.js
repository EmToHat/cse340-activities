/* ******************************************
* This is the application server
* ******************************************/ 
// Comment in the code to help yrself and others 
// see the organization and functionality

const express = require('express') // This line imports the express package

const app = express() 
// This line creates the "application", 
// triggers the express constructor, 
// making app an object with all the functionality of Express.


/* ******************************************
* Default GET route
* ***************************************** */
// Code comment

app.get("/", (req, res) => {
    res.send("Welcome home!");
});
// app.get() is an Express Handler. Express is watching for a "GET" request.
// "/" indicates the route. A route is the path indicated by the URL. In this case it is just the base URL w/nothing added.
// "," the comma separates the route from the function that is responsible for delievering a response to the request. 
// (req, res) => { ... } is an anonymous function that takes the request and response objects as parameters.
// res.send("Welcome home!") is a method of the response object that sends a message back to the browser. It's not a web page, just a message string.


/* ******************************************
* Server host name and port
* ***************************************** */
const HOST = 'localhost'
const PORT = 3000


/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`);
});




// to run the server type: node server.js and press Enter
// to stop the server hold: ctrl + C 