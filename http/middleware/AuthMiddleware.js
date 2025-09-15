const jwt = require("jsonwebtoken");

exports.authChecker = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Authorization token is required." });
  }

  const token = authHeader.split(" ")[1] || ""; // Assuming "Bearer <token>" format

  if (!token) {
    return res.status(401).json({ message: "Invalid token format." });
  }

  try {
    const decoded = jwt.verify(
      token,
      "9f965da933c6f7689fca13a0d1ab871aa4070a3b853df141984ec5e8e0b13380"
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message, error: err });
  }
};

exports.checkRole = async (req, res, next) => {
  if (req.user.role == 2) {
    return res.status(401).json({ message: "Not permission" });
  }
  next();
};
