const express = require('express');

const router = express.Router();
const db = require('../db');

router.post('/new', (req, res) => {
  const { author, title, content } = req.body;
  db.insertPost(author, title, content)
    .then(() => {
      return db.getPosts()
    })
    .then(posts => {
      res.json(posts)
    })
    .catch(err => console.log(err))
  // console.log('new post', author, title, content)
})

// get post and comments by post id
router.get('/:id', (req, res) => {
  let id = +req.params.id;
  db.getPostAndCommentsByPostId(id)
    .then(obj => {
      res.json(obj)
    })
    .catch(err => console.log(err))
})

router.get('/', (req, res) => {
  // get all posts and comments from db
  db.getPostsAndComments()
    .then(obj => {
      res.json(obj)
    })
    .catch(err => console.log(err))
})

module.exports = router;