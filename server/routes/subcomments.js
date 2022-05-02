const express = require('express');

const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
  db.getSubcomments()
    .then(subcomments => {
      res.json(subcomments)
    })
    .catch(err => console.log(err))
})

module.exports = router;