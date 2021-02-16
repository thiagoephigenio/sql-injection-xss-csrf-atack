const User = require("../models/User");
const jwt = require("../../config/jwt");

class SessionController {
  signup(req, res) {
    if (req.body.user === "thiago" && req.body.pwd === "123") {
      const user = { id: 1 };
      try {
        const token = jwt.sign({ user: user.id });
        res.status(200).send({ user, token });
      } catch (error) {
        console.log(error);
        res.status(500).send("Login inválido!");
      }
    }
  }

  login(req, res) {
    const [, hash] = req.headers.authorization.split(" ");
    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    User.findOne(email, password)
      .then((userResult) => {
        const [user] = userResult.rows;

        if (!user) {
          res.status(401).send();
        }

        const token = jwt.sign({ user: user.id });
        res.cookie("authcookie", token);
        res.cookie("_csrf", "token");
        res.cookie(" csrf_token", "token");
        console.log("logado");
        res.status(200).send({ user, token });
      })
      .catch(() => res.status(401));
  }

  logout(req, res) {
    const cookies = req.headers.cookie.split(";");
    cookies.map((cookie) => {
      const [name, value] = cookie.split("=");
      res.cookie(`${name}`, `${value}`, { expires: new Date(0) });
    });
    res.status(200).send("logout successful !");
  }
}

module.exports = new SessionController();
