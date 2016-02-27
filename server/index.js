// this is were the server is sestup to listen on port 3000
var server = require('./server.js')

server.set('port', 3000)    // set the port

// now tell the server to listen on that port
var serverListener = server.listen(server.get('port'), function () {
  var port = serverListener.address().port
  console.log("Server now listening on Port: ", port)
})
