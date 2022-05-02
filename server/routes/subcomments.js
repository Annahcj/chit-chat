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

router.post('/', (req, res) => {
  const subcomment = req.body;
  db.addSubcomment(subcomment)
    .then(ids => {
      return db.getSubcommentById(ids[0].id)
    })
    .then(newSubcomment => {
      res.json(newSubcomment)
    })
    .catch(err => console.log(err))
})

module.exports = router;