const jwt = require("../../config/jwt");

module.exports = async (req, res, next) => {

  const token = req.cookies.authcookie;
  console.log(token)
  try {
    const decoded = await jwt.verify(token);
    
    req.headers.user = decoded;
    console.log("token")
    return next();
  } catch (error) {return res.status(401).json({ msg: "Token invalid" })};
};
