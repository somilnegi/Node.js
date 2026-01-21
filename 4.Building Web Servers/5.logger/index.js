const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;
  const log = `[${new Date().toLocaleDateString()}]: ${method} ${path}\n`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          return res.writeHead(200).end("Hello from the server!");
        case "/contact-us":
          return res
            .writeHead(200)
            .end("Email: 'xyz@gmail.com'; Contact no.: '1234567890'");
        case "/tweet":
          return res.writeHead(200).end("Tweet 1\nTweet 2");
      }
      break;
    case "POST":
      switch (path) {
        case "/tweet":
          return res.writeHead(200).end("Successfully posted the tweet!");
      }
      break;
  }

  return res.writeHead(404).end("You're lost!");
});

server.listen(8000, () => {
  console.log(`HTTP server is running on port 8000`);
});
