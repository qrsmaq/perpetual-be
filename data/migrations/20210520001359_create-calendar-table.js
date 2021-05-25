exports.up = function (knex) {
  return knex.schema.createTable("calendar", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("calendar");
};
