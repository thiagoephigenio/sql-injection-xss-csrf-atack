const jwt = require("jsonwebtoken");

exports.sign = (payload) => jwt.sign(payload, process.env.APP_SECRET); 

exports.verify = (token) => jwt.verify(token, process.env.APP_SECRET);