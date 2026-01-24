const express = require("express"); // Import the express module

const app = express(); // Create an instance of the express application

const PORT = 8000; // Set the port number

// Create a in memory database (violating the database concept)
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
  },
];

app.use(express.json()); // Parse JSON request bodies so we can access them in req.body

// Get all books
app.get("/books", (req, res) => {
  //   res.setHeader("x-name", "John Doe"); // Set a custom header
  res.json(books); // Send the books array as a JSON response
});

// Get a specific book
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

// Create a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if(!title || !author || title.trim() === "" || author.trim() === "") {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const id = books.length + 1;


  const book = {
    id,
    title,
    author,
  };
  books.push(book);
  return res.status(201).json({ message: "Book created successfully", id });
});
//The data being sent in request body is stored in req.body and express dont know how to parse it so we need to use express.json() middleware

// Delete a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  const index = books.findIndex((b) => b.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  books.splice(index, 1); // Remove the book from the array using splice method 
  return res.json({ message: "Book deleted successfully" });
})
 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // Start the server
