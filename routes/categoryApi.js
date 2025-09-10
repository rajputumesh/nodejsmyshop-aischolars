const express = require("express");
const router = express.Router();
const CategoryController = require("../http/controllers/CategoryController");

router.post("/create", CategoryController.create);

module.exports = router;
