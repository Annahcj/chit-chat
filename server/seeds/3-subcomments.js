exports.seed = function (knex) {
  return knex('subcomments').insert([
    { id: 1, comment_id: 1, author: 'Anna', comment: 'A subcomment!', created_at: new Date('2022-04-10') }
  ])
}
