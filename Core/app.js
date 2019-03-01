import express from 'express';
import routes from './routes';

//express app setup
const app = express();

//use routes
app.use('/', routes);

export default app;
