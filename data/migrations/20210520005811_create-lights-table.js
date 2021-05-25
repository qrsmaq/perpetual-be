exports.up = function (knex) {
  return knex.schema.createTable("lights", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("type");
    tbl.integer("wattage");
    tbl.text("color");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("lights");
};
