const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, "jwtSecret");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(502).send("Invalid token.");
  }
}

module.exports = auth;
