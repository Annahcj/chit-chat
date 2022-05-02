const express = require('express');

const router = express.Router();
const db = require('../db.js');

router.get('/commentId', (req, res) => {
  const commentId = +req.params.commentId;
  db.getSubcomments(commentId)
    .then(subcomments => {
      res.json(subcomments)
    })
    .catch(err => console.log(err))
})

export default router;