const User = require("../models/User");

class UserController {
  create(req, res) {
    console.log(req);
    User.create(req.body.name, req.body.email, req.body.password)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(401).send(error));
  }
  remove(req, res) {
    const id = req.body.id;
    User.remove(id)
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(401).json(error));
  }
  getAll(req, res) {
    User.getAll()
      .then((users) => res.status(200).json(users.rows))
      .catch((error) => res.status(401).json(error));
  }
}

module.exports = new UserController();
