const db = require("../../data/config.js");

module.exports = {
  findAll,
  findById,
  findByUsername,
  add,
  update,
  remove,
};

async function add(data, table) {
  const [id] = await db(table).insert(data, "id");
}

async function findById(id, table) {
  return db(table).where({ id }).first();
}

async function findByUsername(username) {
  return db("users").where({ username });
}

async function update(id, changes, table) {
  return db(table).where("id", id).update(changes);
}

async function remove(id, table) {
  return db(table).where("id", id).del();
}

async function findAll(table) {
  return db(table);
}
