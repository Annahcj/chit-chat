const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { postId, author, comment } = req.body;
  console.log(postId, author, comment)
})

module.exports = router;