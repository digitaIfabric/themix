// server.js

const express = require('express');
const SocketServer = require('ws');
const uuid = require('uuid/v4');
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server ({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    }
  })
 }
wss.on('connection', (ws) => {
  console.log('Client connected')
  let userCount = {"type": "incomingUserCount",
                      "count": wss.clients.size}
  wss.broadcast(JSON.stringify(userCount))
  //Send messages back to clients
  ws.on('message', (message) => {
    let data = JSON.parse(message)
    switch(data.type) {
      case 'postMessage':
      data.id = uuid();
      data.type = 'incomingMessage'
      console.log('User: ' + data.username + ' said ' + data.content)
      wss.broadcast(JSON.stringify(data));
      break;
      default:
    throw new ERROR('Unknown event' + data.type);
  }
})
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
  userCount = {"type": "incomingUserCount",
                          "count": wss.clients.size}
        wss.broadcast(JSON.stringify(userCount))
});
