const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory posts
let posts = [];

// Home - show posts
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// Show form to create new post
app.get("/new", (req, res) => {
  res.render("new");
});

// Handle new post submission
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
