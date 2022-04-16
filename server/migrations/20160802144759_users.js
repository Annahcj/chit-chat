exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('author')
    table.string('title')
    table.string('content')
    table.datetime('created_at').defaultTo(new Date())
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('posts')
}
