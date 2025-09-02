const express = require("express");
const router = express.Router();

const categoryRoute = require("./categoryApi");
const userRoute = require("./userApi");

router.use("/category", categoryRoute);
router.use("/user", userRoute);

module.exports = router;
