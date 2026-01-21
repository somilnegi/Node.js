const http = require("http");

const server = http.createServer(function (req, res) {
  // The callnack function is stored in memory & executed when a request is received
  console.log(`Incoming request at [${new Date().toLocaleDateString()}]`); // Returns the current date and time
  // console.log(req.headers); // Returns the request headers
  // console.log(req.method); // Returns the request method
  // console.log(req.body); // Returns the request body
  console.log(req.url);

  switch (req.url) {
    // Once res.end() is called, the connection is closed
    // Only one response & header can be sent per request
    // If multiple headers are written using res.writeHead(), throws a fatar error
    // If the same is done using res.setHeader(), the last one is used
    case "/":
      res.writeHead(200);
      res.end(" Homepage!");
      break;
    case "/about":
      res.writeHead(200);
      res.end(" About page!");
      break;
    case "/contact":
      res.writeHead(200);
      res.end(" Contact page!");
      break;
    default:
      res.writeHead(404);
      res.end(" Not found!");
  }

  // res.writeHead(201);
  // res.end('OK!')
});

server.listen(8000, () => {
  console.log("Server is running on PORT: 8000");
});
