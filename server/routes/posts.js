const express = require('express');

const router = express.Router();
const db = require('../db');

router.post('/new', (req, res) => {
  const { author, title, content } = req.body;
  console.log('new post', author, title, content)
})

router.get('/', (req, res) => {
  // get all posts and comments from db
  db.getPostsAndComments()
    .then(obj => {
      console.log(obj, 'get posts and comments')
      res.json(obj)
    })
    .catch(err => console.log(err))
})

module.exports = router;