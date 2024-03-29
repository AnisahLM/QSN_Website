const express = require("express");
const app = express.Router();
const { Product } = require("../db");

module.exports = app;

app.get("/", async (req, res, next) => {
  try {
    console.log(res.send(await Product.findAll()));
  } catch (err) {
    next(err);
  }
});
