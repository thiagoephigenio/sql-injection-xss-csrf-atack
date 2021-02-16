const Task = require("../models/Task");

class TaskController {
  create(req, res) {
    Task.create(
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.is_complete
    )
      .then((task) => {
        res.status(200).send(`${task.rowCount}`);
      })
      .catch((error) => {});
  }

  remove(req, res) {
    const id = req.body.id;
    Task.remove(id)
      .then((task) => {
        res.status(200).send(task);
      })
      .catch((error) => {});
  }
  removeAll(req, res) {
    Task.removeAll()
      .then((task) => {
        res.status(200).send(task);
      })
      .catch((error) => {});
  }

  findOne(req, res) {
    const id = req.body.id;
    Task.findOne(id).then((tasks) => res.status(200).send(tasks.rows));
  }

  getAll(req, res) {
    Task.getAll().then((tasks) => res.status(200).send(tasks.rows));
  }
}

module.exports = new TaskController();
