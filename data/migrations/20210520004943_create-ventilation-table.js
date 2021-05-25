exports.up = function (knex) {
  return knex.schema.createTable("ventilation", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.integer("size");
    tbl.text("type");
    tbl.integer("CFM");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ventilation");
};
