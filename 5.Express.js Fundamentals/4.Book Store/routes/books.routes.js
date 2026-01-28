const express = require("express");
const books= require("../db/books");
const router = express.Router();

// Get all books
router.get("/", (req, res) => {
  //   res.setHeader("x-name", "John Doe"); // Set a custom header
  res.json(books); // Send the books array as a JSON response
});

// Get a specific book
router.get("/:id", (req, res) => {
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
router.post("/", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

module.exports = router;