/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('subcomments', (table) => {
    table.increments('id').primary()
    table.integer('comment_id').references('comments.id').onDelete('CASCADE')
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
  return knex.schema.dropTable('subcomments')
};