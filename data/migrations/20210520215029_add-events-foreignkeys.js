exports.up = function (knex) {
  return knex.schema.table("events", (tbl) => {
    tbl
      .integer("room_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("rooms");

    tbl
      .integer("plant_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("plants");

    tbl
      .integer("calendar_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("calendar");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
