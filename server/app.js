const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

app.use(express.json({ limit: "50mb" }));

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

app.use("/api/auth", require("./api/auth"));
app.use("/api/products", require("./api/products"));
app.use("https://forms.googleapis.com/v1/forms", require("./api/forms"));

module.exports = app;
