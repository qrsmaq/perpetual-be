exports.up = function (knex) {
  return knex.schema.createTable("plants", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("type");
    tbl.text("stage");
    tbl.string("qr_code");
    tbl.text("medium");
    tbl.integer("pot_size");
    tbl.text("notes");
    tbl.string("photo");
    tbl.date("plant_date");
    tbl.date("start_veg");
    tbl.date("end_veg");
    tbl.date("start_flower");
    tbl.date("end_flower");
    tbl.date("target_harvest");
    tbl.date("harvest");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants");
};
