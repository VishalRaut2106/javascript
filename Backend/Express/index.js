const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("You are on the home page");
});

app.get("/help", (req, res) => {
  res.send("You are on the help page");
});
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let page = `<h1>Welcome ${username}! Your ID is ${id}</h1>`;
  res.send(page);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no results")
  
});

// Catch-all route for undefined paths
app.use((req, res) => {
  res.status(404).send("This page does not exist");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
