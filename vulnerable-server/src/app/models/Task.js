const db = require("../../config/database");

class Task {
  create(user_id, title, description, is_complete) {
    return db.query(
      `INSERT INTO tasks(
        user_id, 
        title, 
        is_complete,
        description) 
        VALUES (${user_id}, '${title}', ${is_complete}, '${description}')`
    );
  }
  remove(id) {
    const query = "DELETE FROM tasks WHERE id =" + id;
    return db.query(query);
  }
  removeAll() {
    const query = "DELETE FROM tasks";
    return db.query(query);
  }
  getAll() {
    const query = "SELECT * FROM tasks";
    return db.query(query);
  }

  findOne(id) {
    const query = "SELECT * FROM tasks WHERE id = " + id
    return db.query(query);
  }
}
module.exports = new Task();
