const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPosts,
  getComments,
  getPostsAndComments,
  insertComment,
  insertPost,
  getPostById,
  getCommentById,
  getCommentsByPostId,
  getPostAndCommentsByPostId,
  deleteComment,
  deletePost,
  getSubcomments,
  addSubcomment,
  getSubcommentById
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

function insertComment(post_id, author, comment, auth0Id, db = connection) {
  return db('comments')
    .insert({ post_id, author, comment, auth0Id, created_at: new Date() })
    .returning('id') 
}

function insertPost(author, title, content, auth0Id, db = connection) {
  return db('posts')
    .insert({ author, title, content, auth0Id, created_at: new Date() })
    .returning('id')
}

function getPostById(id, db = connection) {
  return db('posts')
    .select()
    .where('id', id)
    .first()
}

function getCommentById(id, db = connection) {
  return db('comments') 
    .select()
    .where('id', id)
    .first()
}

function getCommentsByPostId(post_id, db = connection) {
  return db('comments')
    .select()
    .where('post_id', post_id)
}

function getPostAndCommentsByPostId(post_id, db = connection) {
  let post;
  return getPostById(post_id, db) 
    .then(res => {
      post = res;
      return getCommentsByPostId(post_id, db)
    })
    .then(comments => {
      return { post, comments }
    })
    .catch(err => console.log(err))
}

function deleteComment(comment_id, db = connection) {
  return db('comments')
    .del()
    .where('id', comment_id)
}

function deletePost(postId, db = connection) {
  return db('posts')  
    .del()
    .where('id', postId)
}

// subcomments
function getSubcomments(db = connection) {
  return db('subcomments')
    .select()
}

function addSubcomment(subcomment, db = connection) {
  return db('subcomments')
    .insert({ ...subcomment, created_at: new Date() })
    .returning('id')
}

function getSubcommentById(id, db = connection) {
  return db('subcomments')
    .select()
    .where('id', id)
    .first()
}