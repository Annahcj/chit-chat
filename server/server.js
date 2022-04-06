const express = require('express');
const app = express();
const cors = require('cors');

const commentRoutes = require('./routes/comments');

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/comments', commentRoutes);

module.exports = app;