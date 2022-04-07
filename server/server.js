const express = require('express')
const cors = require('cors');

const postRoutes = require('./routes/posts')
const commentRoutes = require('./routes/comments')

const server = express()

// Middleware
server.use(express.json({ extended: true }))
server.use(express.urlencoded({ extended: true }))
server.use(cors());

// Routes
server.use('/posts', postRoutes)
server.use('/comments', commentRoutes)

module.exports = server