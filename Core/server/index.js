//import dependencies
import http from 'http';
import express from 'express';

//initialize express
const app = express();

//logger function
function log(message) {
  process.stdout.write(`${message}\n`);
}

//normalize port into a #, string, or false
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    //named pipe???
    return val;
  }

  if (port >= 0) {
    //port #
    return port;
  }
  return false;
}

//get port from env
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

//create http server
const server = http.createServer(app);
let availablePort = port;

//listen on port, on all network interfaces
function startServer(serverPort) {
  server.listen(serverPort);
}

//error event listener
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = `${typeof port === 'string' ? 'Pipe' : 'Port'} ${port}`;

  //handle specific listen errors
  switch (error.code) {
    case 'EACCES':
      log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;

    case 'EADDRINUSE':
      if (availablePort - port < 10) {
        availablePort += 1;
        startServer(availablePort);
      } else {
        log(`${bind} is already in use`);
        process.exit(1);
      }
      break;

    default:
      throw error;
  }
}

//event listenser for http server listening event
function onListening() {
  const addr = server.address();
  const bind = `${typeof addr === 'string' ? 'pipe' : 'port'} ${
    typeof addr === 'string' ? addr : addr.port
  }`;
  log(`Server is listening on ${bind}`);
  log(`Visit: http://localhost:${addr.port}`);
}

//start server
server.on('error', onError);
server.on('listening', onListening);

startServer(availablePort);
