const Sequelize = require("sequelize");
const config = require("../config/database");
const connection = new Sequelize(config);
require("../app/models/User");
require("../app/models/Task");
module.exports = connection;
