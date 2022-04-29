const express = require('express');

const router = express.Router();
const db = require('../db.js');

const checkJwt = require('../auth0');

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

router.post('/', checkJwt, (req, res) => {
  const { postId, author, comment, auth0Id } = req.body;
  db.insertComment(postId, author, comment, auth0Id)
    .then((ids) => {
      return db.getCommentById(ids[0].id); // sqlite3: ids[0], postgresql: ids[0].id
    })
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
})

router.delete('/:postId/:commentId', checkJwt, (req, res) => {
  const { commentId } = req.params;
  db.deleteComment(commentId)
    .then(() => {
      res.json({})
    })
    .catch(err => console.log(err))
})

module.exports = router;