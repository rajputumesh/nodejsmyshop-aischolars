const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const detail = await User.findOne({ email: req.body.email });
    if (!detail) {
      res.status(500).json({
        success: false,
        message: "User Not found",
        data: "",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, detail.password);
    if (!isMatch) {
      res.status(500).json({
        success: false,
        message: "Password not match. please retry again",
        data: "",
      });
    }

    token = jwt.sign(
      {
        userId: detail.id,
        email: detail.email,
        name: detail.name,
        role: detail.role,
        age: detail.age,
      },
      "9f965da933c6f7689fca13a0d1ab871aa4070a3b853df141984ec5e8e0b13380",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "user login successfully.",
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
};

exports.register = async (req, res) => {
  //
};

exports.loginByGoogle = async (req, res) => {
  //
};

exports.loginByFacebook = async (req, res) => {
  //
};
