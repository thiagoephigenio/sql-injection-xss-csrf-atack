const express = require("express");
const app = express(require("./routes/routes"));
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/routes"));

module.exports = app;
