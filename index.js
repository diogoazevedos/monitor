const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { totalmem, freemem } = require('os')

server.listen(process.env.PORT || 1337)

app.use(express.static(__dirname + '/public'))

setInterval(() => {
  io.emit('memory usage', totalmem() - freemem())
}, 1000)
