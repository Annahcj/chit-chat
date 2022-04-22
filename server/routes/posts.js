const express = require('express');

const router = express.Router();
const db = require('../db');

router.post('/new', (req, res) => {
  const { author, title, content } = req.body;
  db.insertPost(author, title, content)
    .then((ids) => {
      return db.getPostById(ids[0].id)
    })
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  let id = +req.params.id;
  db.getPostById(id)
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
  db.getPosts()
    .then(obj => {
      res.json(obj)
    })
    .catch(err => console.log(err))
})

module.exports = router;