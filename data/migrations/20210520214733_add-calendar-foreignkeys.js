exports.up = function (knex) {
  return knex.schema.table("calendar", (tbl) => {
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
