exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('author')
    table.string('title')
    table.string('content')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('posts')
}
