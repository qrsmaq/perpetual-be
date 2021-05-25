exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    // creates primary key called id
    tbl.increments();
    // creates a text field called name which is required and unique
    tbl.text("name").notNullable();
    tbl.text("username").unique().notNullable();
    tbl.text("email").unique().notNullable();
    tbl.text("password").notNullable();
    tbl.text("instagram");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
