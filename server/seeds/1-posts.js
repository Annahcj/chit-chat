exports.seed = function (knex) {
  return knex('posts').insert([
    { id: 1, author: 'alice', title: 'Lets watch a movie', content: 'Lets all go and watch a movie! Does anyone have any recommendations?' },
    { id: 2, author: 'bob', title: 'Fundamentals of javascript', content: 'Javascript is a powerful programming language' },
  ])
}
