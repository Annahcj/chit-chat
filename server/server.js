const express = require('express')
const cors = require('cors');
const path = require('path')

const postRoutes = require('./routes/posts')
const commentRoutes = require('./routes/comments')
const subcommentRoutes = require('./routes/subcomments')

const server = express()

// Middleware
server.use(express.json({ extended: true }))
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.resolve(__dirname, '../client/build')))
server.use(cors());

// Routes
server.use('/api/posts', postRoutes)
server.use('/api/comments', commentRoutes)
server.use('/api/subcomments', subcommentRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
 
module.exports = server
