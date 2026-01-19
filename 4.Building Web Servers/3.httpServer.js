// HTTP Server Implementation
// http module provides functionality to create an HTTP server in Node.js

const http = require('http'); // Import the http module

const server = http.createServer(function (req, res) { // Create an HTTP server 
    console.log('Received a request for: ' + req.url); // Log when a request is received

    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header

    // All the db operations would go here

    res.end('Thank you for visiting\n'); // Send response body
    // Without the res.end() method, the server will keep the connection open and the spinning wheel will continue to show in the browser.
}); 

// The server receives 2 requests, one for '/' and one for '/favicon.ico' because browsers often request the favicon automatically.

server.listen(8000, function () { // Start the server and listen on port 8000
    console.log('Server is listening on port 8000');
})


// The physical devices (like computers, phones, tablets) have different services running on them.
// They also have different IP addresses to identify them on a network.
// localhost is a hostname that refers to the current device used to access it.
// localhost: 8000 refers to the service running on port 8000 of the localhost device.
// Each service is identified by a port number. For example, web servers typically run on port 80 (HTTP) or 443 (HTTPS).