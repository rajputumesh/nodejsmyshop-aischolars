const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.get("/list", async (req, res) => {
  try {
    const list = await User.find();
    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      data: list,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    /* const user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      role:1
    }); */

    const data = req.body;
    data.role = 1;
    data.name = `Dr. ${data.name}`;
    const user = new User(data);
    await user.save();
    res.status(200).json({
      success: true,
      message: "User Created successfully.",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
});

router.delete("/delete", (req, res) => {
  res.json("Hi, this is my first node program");
});

router.put("/update", (req, res) => {
  res.json("Hi, this is my first node program");
});

module.exports = router;

/* 
http://localhost:8000/api/user/get
/api/user/store
/api/user/delete
/api/user/update
*/
