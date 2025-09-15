const express = require("express");
const router = express.Router();

const categoryRoute = require("./categoryApi");
const productRoute = require("./productApi");
const userRoute = require("./userApi");
const middelwahre = require("../http/middleware/AuthMiddleware");

router.use("/category", middelwahre.authChecker, categoryRoute);
router.use(
  "/product",
  middelwahre.authChecker,
  middelwahre.checkRole,
  productRoute
);
router.use("/user", userRoute);

module.exports = router;
