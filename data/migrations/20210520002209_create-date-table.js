// no dates table anymore. repurposed migration file to create the events table
exports.up = function (knex) {
  return knex.schema.createTable("events", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.date("due_date");
    tbl.text("notes");
    tbl.string("notifications");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
