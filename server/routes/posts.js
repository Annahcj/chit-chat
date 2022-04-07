const express = require('express');

const router = express.Router();

router.post('/new', (req, res) => {
  const { author, title, content } = req.body;
  console.log('new post', author, title, content)
})

module.exports = router;