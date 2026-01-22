// Express is a framework for building web applications in Node.js
// It provides a set of tools and middleware for handling HTTP requests and responses/
// A server cam be made using http module also, but Express is easier to use because it provides a higher level of abstraction.

const express = require("express"); // Import the express module

const app = express(); // Create an instance of the express application, this is the main app


app.get("/", (req, res) => {
    res.end("Homepage!");
}); // Define a route for the root URL ("/"

app.get("/contact-us", (req, res) => {
    res.end("Email: 'xyz@gmail.com'; Contact no.: '1234567890'");
}); // Define a route for the "/contact-us" URL

app.get("/tweet", (req, res) => {
    res.end("Tweet 1\nTweet 2");
}); // Define a route for the "/tweet" URL

app.post("/tweet", (req, res) => {
    res.status(201).end("Successfully posted the tweet!");
}); // Define a route for the "/tweet" URL

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
}); // Start the server and listen on port 8000