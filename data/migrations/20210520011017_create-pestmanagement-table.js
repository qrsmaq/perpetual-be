exports.up = function (knex) {
  return knex.schema.createTable("pest-management", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("description");
    tbl.text("notes");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pest-management");
};
