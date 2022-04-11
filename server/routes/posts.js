const express = require('express');

const router = express.Router();
const db = require('../db');

router.post('/new', (req, res) => {
  const { author, title, content } = req.body;
  db.insertPost(author, title, content)
    .then((ids) => {
      return db.getPostById(ids[0])
    })
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
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

router.delete('/:id', (req, res) => {
  const id = +req.params.id;
  db.deletePost(id)
    .then(() => {
      res.json({})
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