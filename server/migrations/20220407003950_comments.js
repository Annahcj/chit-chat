/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('post_id').references('posts.id').onDelete('CASCADE')
    table.string('author')
    table.text('comment')
    table.datetime('created_at')
    table.string('auth0Id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
