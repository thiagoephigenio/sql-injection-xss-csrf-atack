const routes = require("express").Router();
const TaskController = require("../app/controllers/TaskController");
const UserController = require("../app/controllers/UserController");
const SessionController = require("../app/controllers/SessionController");
const authMiddleware = require("../app/middlewares/auth");
const cors = require("cors");

routes.use(cors({ origin: "http://localhost:3000", credentials: true }));

routes.post("/signup", (req, res) => {
  SessionController.signup(req, res);
});

routes.get("/login", (req, res) => {
  SessionController.login(req, res);
});

routes.use(authMiddleware);

routes.get("/tasks", (req, res) => {
  TaskController.getAll(req, res);
});

routes.post("/task", (req, res) => {
  TaskController.findOne(req, res);
});

routes.post("/create-task", (req, res) => {
  TaskController.create(req, res);
});

routes.post("/remove-task", (req, res) => {
  TaskController.remove(req, res);
});

routes.post("/remove-all-tasks", (req, res) => {
  TaskController.removeAll(req, res);
});

routes.get("/users", (req, res) => {
  UserController.getAll(req, res);
});

routes.post("/user", (req, res) => {
  UserController.findOne(req, res);
});

routes.post("/create-user", (req, res) => {
  UserController.create(req, res);
});

routes.get("/logout", (req, res) => {
  SessionController.logout(req, res);
});
module.exports = routes;
