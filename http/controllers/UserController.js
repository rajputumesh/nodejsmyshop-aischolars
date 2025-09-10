const User = require("../../models/UserModel");

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
};

exports.create = async (req, res) => {
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
