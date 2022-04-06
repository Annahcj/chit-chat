const server = require('./server')

const port = process.env.PORT || 5500

server.listen(port, function () {
  console.log('Listening on port', port)
})