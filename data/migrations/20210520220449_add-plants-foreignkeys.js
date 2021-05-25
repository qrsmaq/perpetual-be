exports.up = function (knex) {
  return knex.schema.table("plants", (tbl) => {
    tbl
      .integer("room_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants");
};
