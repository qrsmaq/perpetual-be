exports.up = function (knex) {
  return knex.schema.createTable("rooms", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("type").notNullable();
    tbl.decimal("length");
    tbl.decimal("width");
    tbl.decimal("height");
    tbl.string("avatar");
    tbl.text("notes");
    tbl.string("photos");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("rooms");
};
