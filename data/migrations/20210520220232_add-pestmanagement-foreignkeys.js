exports.up = function (knex) {
  return knex.schema.table("pest-management", (tbl) => {
    tbl
      .integer("room_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pest-management");
};
