exports.up = function (knex) {
  return knex.schema.createTable("circulation", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("type");
    tbl.integer("size");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("circulation");
};
