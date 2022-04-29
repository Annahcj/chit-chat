const express = require('express');

const router = express.Router();
const db = require('../db');

const checkJwt = require('../auth0');

router.post('/new', checkJwt, (req, res) => {
  const { author, title, content, auth0Id } = req.body;
  db.insertPost(author, title, content, auth0Id)
    .then((ids) => {
      return db.getPostById(ids[0].id) // sqlite3: ids[0], postgresql: ids[0].id
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

router.delete('/:id', checkJwt, (req, res) => {
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