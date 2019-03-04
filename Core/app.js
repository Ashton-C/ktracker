import express from 'express';
import routes from './routes';

//express app setup
const app = express();

//use routes
require('./routes')(app);

export default app;
