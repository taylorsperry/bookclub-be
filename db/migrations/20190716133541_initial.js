
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('members', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('events', function(table) {
      table.increments('id').primary();
      table.integer('member_id').unsigned();
      table.foreign('member_id').references('members.id');
      table.integer('book_id').unsigned();
      table.foreign('book_id').references('books.id');
      table.string('date');
      table.string('time');

      table.timestamps(true, true)
    }),

    knex.schema.createTable('attendees', function(table) {
      table.increments('id').primary();
      table.integer('member_id').unsigned()
      table.foreign('member_id').references('members.id');
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('events.id');
      table.string('contribution');

      table.timestamps(true, true)
    }),

    knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.integer('event_id').unsigned();
      table.foreign('event_id').references('events.id');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('members'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('attendees'),
    knex.schema.dropTable('books')
  ]);
};
