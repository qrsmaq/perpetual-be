exports.up = function (knex) {
  return knex.schema.table("rooms", (tbl) => {
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("rooms");
};
