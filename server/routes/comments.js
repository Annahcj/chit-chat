const express = require('express');

const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
  db.getComments()
    .then(comments => {
      res.json(comments);
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.getCommentsByPostId(id)
    .then(comments => {
      res.json(comments);
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const { postId, author, comment, auth0Id } = req.body;
  db.insertComment(postId, author, comment, auth0Id)
    .then((ids) => {
      return db.getCommentById(ids[0]); // for postgresql: ids[0].id
    })
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
})

router.delete('/:postId/:commentId', (req, res) => {
  const { commentId } = req.params;
  db.deleteComment(commentId)
    .then(() => {
      res.json({})
    })
    .catch(err => console.log(err))
})

module.exports = router;