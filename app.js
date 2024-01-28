const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Database Connected"));

app.get("/", (req, res) => {
  res.render("base");
});

app.listen(3000, () => {
  console.log("server is live");
});
