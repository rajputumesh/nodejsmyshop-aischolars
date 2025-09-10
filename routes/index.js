const express = require("express");
const router = express.Router();

const categoryRoute = require("./categoryApi");
const productRoute = require("./productApi");
const userRoute = require("./userApi");

router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/user", userRoute);

module.exports = router;
