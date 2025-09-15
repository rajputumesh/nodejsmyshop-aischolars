const Product = require("../../models/ProductModel");

exports.getAll = async (req, res) => {
  try {
    console.log(req.user);

    const list = await Product.find().populate("CategoryId");
    res.status(200).json({
      success: true,
      message: "Product fetched successfully.",
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

exports.create = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({
      success: true,
      message: "Product Created successfully.",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: err,
    });
  }
};
