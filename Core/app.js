import http from 'http';
import express from 'express';
const app = express();
const port = 3000;

const express = express();

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  console.log(`Server is listening on port: ${port}.`);
});

app.get('*', (req, res) => res.send('Hello World!'));
