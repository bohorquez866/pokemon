const jwt = require("jsonwebtoken");

function generateAccessToken() {
  const data = {
    apiVersion: "1.0",
    accessLevel: "anonymous",
  };
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "30d" });
}

function validateAccessToken(req, res, next) {
  const accessToken = req.headers["authorization"];

  if (!accessToken) return res.json({ error: "No token provided" });

  jwt.verify(accessToken, process.env.JWT_SECRET, (err) => {
    if (err) return res.json({ errorMessage: err.message });
    next();
  });
}

function revokeAccessToken(req, res, next) {
  const accessToken = req.headers["authorization"];

  if (accessToken) {
    res.setHeader("Authorization", "");
    next();
  }

  res.json({ error: "No token provided" });
}

module.exports = {
  generateAccessToken,
  validateAccessToken,
  revokeAccessToken,
};
