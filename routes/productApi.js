const express = require("express");
const router = express.Router();
const ProductController = require("../http/controllers/ProductController");

router.post("/create", ProductController.create);
router.get("/list", ProductController.getAll);

module.exports = router;
