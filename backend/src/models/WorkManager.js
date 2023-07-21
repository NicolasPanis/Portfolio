const AbstractManager = require("./AbstractManager");

class WorkManager extends AbstractManager {
  constructor() {
    super({ table: "works" });
  }

  find(id) {
    return this.database.query(
      `select w.id, w.title, w.date, w.description, w.image_url1, w.image_url2, w.image_url3, w.path, t.name as tags from ${this.table} as w
      inner join tags as t on t.id = w.tags_id 
    where w.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(work) {
    return this.database.query(
      `insert into ${this.table} (title, date, description, image_url1, image_url2, image_url3, path, tags_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        work.title,
        work.date,
        work.description,
        work.image_url1,
        work.image_url2,
        work.image_url3,
        work.path,
        work.tags_id,
        work.id,
      ]
    );
  }

  update(work) {
    return this.database.query(
      `update ${this.table} set title = ?, date = ?, description =?, image_url1 = ?, image_url2 = ?, image_url3 = ?, path = ?, tags_id = ? where id = ?`,
      [
        work.title,
        work.date,
        work.description,
        work.image_url1,
        work.image_url2,
        work.image_url3,
        work.path,
        work.tags_id,
        work.id,
      ]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = WorkManager;
