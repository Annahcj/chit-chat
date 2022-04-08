const express = require('express');

const router = express.Router();
const db = require('../db.js');

router.post('/', (req, res) => {
  const { postId, author, comment } = req.body;
  db.insertComment(postId, author, comment)
    .then(() => {
      return db.getPostsAndComments()
    })
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
})

module.exports = router;