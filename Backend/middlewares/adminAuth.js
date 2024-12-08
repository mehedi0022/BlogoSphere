const jwt = require("jsonwebtoken");

// Admin Auth

const authAdmin = async (req, res, next) => {
  try {
    const { aToken } = req.headers;

    if (!aToken) {
      return res.json({ success: false, message: "Not Authorize login First" });
    }
    const decodedToken = jwt.verify(aToken, process.env.JWT_SECRET);

    if (decodedToken.email !== process.env.ADMIN_EMAIl) {
      return res.json({ success: false, message: "Not Admin login First" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = authAdmin;
