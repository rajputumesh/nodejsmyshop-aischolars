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

router.get("/details", async (req, res) => {
  try {
    const detail = await User.findById(req.body.id);
    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      data: detail,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
});

router.get("/detailnyemail/", async (req, res) => {
  try {
    const detail = await User.findOne({ email: req.body.email });
    res.status(200).json({
      success: true,
      message: "User Detail successfully.",
      data: detail,
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

router.delete("/delete/:user_id", async (req, res) => {
  try {
    const detail = await User.findByIdAndDelete(req.params.user_id);
    res.status(200).json({
      success: true,
      message: "User Delete successfully.",
      data: detail,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
});

router.put("/update/:user_id", async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.user_id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: update,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
});

module.exports = router;
