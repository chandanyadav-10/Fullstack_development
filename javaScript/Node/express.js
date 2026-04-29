const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "/home.html"));
  res.sendFile(path.join(__dirname, "/sde.html"));
//   res.send("Home");
});
app.get("/about", (req, res) => {
  console.log(req.query.name);
  res.send("About");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
