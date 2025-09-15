const User = require("../../models/UserModel");
const bcrypt  = require('bcryptjs');

exports.getAll = async (req, res) => {
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
};

exports.details = async (req, res) => {
  try {
    const detail = await User.findById(req.params.user_id);
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
};

exports.DByEmail = async (req, res) => {
  try {
    const detail = await User.findOne({ email: req.body.email });
    if (!detail) {
      res.status(500).json({
        success: false,
        message: "User Not found",
        data: err,
      });
    }

    if (req.body.password !== detail.password) {
      res.status(500).json({
        success: false,
        message: "Password not match",
        data: err,
      });
    }

    token = jwt.sign(
      {
        userId: detail.id,
        email: detail.email,
        name: detail.name,
      },
      "9f965da933c6f7689fca13a0d1ab871aa4070a3b853df141984ec5e8e0b13380",
      { expiresIn: "1y" }
    );

    res.status(200).json({
      success: true,
      message: "user login successfully.",
      data: token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    /* const user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      role:1
      password:req.body.password
    }); */

    const data = req.body;
    data.role = 2;
    data.password = await bcrypt.hash(data.password, 10);

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
};

exports.delete = async (req, res) => {
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
};

exports.update = async (req, res) => {
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
};
