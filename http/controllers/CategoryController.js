const Category = require("../../models/CategoryModel");

exports.create = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(200).json({
      success: true,
      message: "Category Created successfully.",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
};
