exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('author')
    table.string('title')
    table.text('content')
    table.datetime('created_at')
    table.string('auth0Id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('posts')
}
