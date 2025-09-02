const express = require("express");
const router = express.Router();
const User = require("../");

router.get("/getAll", (req, res) => {
  res.json("Hi, this is my first node program");
});

router.post("/store", (req, res) => {
  res.json("Hi, this is my first node program");
});

router.delete("/delete", (req, res) => {
  res.json("Hi, this is my first node program");
});

router.put("/update", (req, res) => {
  res.json("Hi, this is my first node program");
});

module.exports = router;
