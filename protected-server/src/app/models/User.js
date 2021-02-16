const db = require("../../config/database");

class User {
  create(name, email, password) {
    return db.query(
      `INSERT INTO users(
        name, 
        email, 
        password) 
        VALUES ( '${name}', '${email}', ${password})`
    );
  }

  remove(id) {
    const query = "DELETE FROM users WHERE id =" + id;
    return db.query(query);
  }

  removeAll() {
    const query = "DELETE FROM users";
    return db.query(query);
  }

  getAll() {
    const query = "SELECT * FROM users";
    return db.query(query);
  }

  findOne(email, password) {
    const query =
      `SELECT * FROM users WHERE email = '` +
      email +
      `' AND password = '` +
      password +
      `'`;
    return db.query(query);
  }
}
module.exports = new User();
