exports.seed = function (knex) {
  return knex('comments').insert([
    { id: 10, post_id: 1, author: 'anna', comment: 'Try watching star wars!' },
    { id: 11, post_id: 2, author: 'alice', comment: 'javascript is slower than java' },
  ])
}
