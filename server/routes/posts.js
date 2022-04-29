const express = require('express');

const router = express.Router();
const db = require('../db');

const checkJwt = require('../auth0');

router.post('/new', checkJwt, (req, res) => {
  const { author, title, content, auth0Id } = req.body;
  db.insertPost(author, title, content, auth0Id)
    .then((ids) => {
      if (process.env.NODE_ENV === 'production') return db.getPostById(ids[0].id) // postgresql: ids[0].id
      else return db.getPostById(ids[0]); // sqlite3: ids[0]
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