exports.up = function (knex) {
  return knex.schema.table("ventilation", (tbl) => {
    tbl
      .integer("ventilation")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ventilation");
};
