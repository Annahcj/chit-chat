const express = require('express');

const router = express.Router();
const db = require('../db.js');

router.post('/', (req, res) => {
  const { postId, author, comment } = req.body;
  db.insertComment(postId, author, comment)
    .then((ids) => {
      return db.getCommentById(ids[0].id);
    })
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
})

router.delete('/:postId/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  db.deleteComment(commentId)
    .then(() => {
      res.json({})
    })
    .catch(err => console.log(err))
})

module.exports = router;