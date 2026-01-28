const express = require("express"); // Import the express module

const bookRouter = require("./routes/books.routes"); // Import the book routes

const app = express(); // Create an instance of the express application

const PORT = 8000; // Set the port number

// Create a in memory database (violating the database concept)


app.use(express.json()); // Parse JSON request bodies so we can access them in req.body


//Routes
app.use("/books", bookRouter);
 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // Start the server
