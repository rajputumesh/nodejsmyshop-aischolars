const express = require("express");
const router = express.Router();
const UserController = require("../http/controllers/UserController");
const AuthController = require("../http/controllers/AuthController");

//user Controller
router.get("/list", UserController.getAll);
router.get("/details/:user_id", UserController.details);
router.get("/detailbyemail/", UserController.DByEmail);
router.post("/create", UserController.create);
router.delete("/delete/:user_id", UserController.delete);
router.put("/update/:user_id", UserController.update);

//auth
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/login-by-goolge", AuthController.loginByGoogle);
router.post("/login-by-facebook", AuthController.loginByFacebook);

module.exports = router;
