const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPosts,
  getComments,
  getPostsAndComments,
  insertComment,
  insertPost
}

function getPosts(db = connection) {
  return db('posts').select()
}

function getComments(db = connection) {
  return db('comments').select()
}

function getPostsAndComments(db = connection) {
  let posts;
  return getPosts(db)
    .then(res => {
      posts = res;
      return getComments(db = connection)
    })
    .then(comments => {
      return {posts, comments}
    })
}

function insertComment(post_id, author, comment, db = connection) {
  return db('comments')
    .insert({ post_id, author, comment })
}

function insertPost(author, title, content, db = connection) {
  return db('posts')
    .insert({ author, title, content })
}