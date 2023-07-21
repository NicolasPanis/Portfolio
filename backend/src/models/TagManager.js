const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
  constructor() {
    super({ table: "tags" });
  }

  insert(tags) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      tags.name,
    ]);
  }

  update(tags) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [tags.name, tags.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = TagManager;
