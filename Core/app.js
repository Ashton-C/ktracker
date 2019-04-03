import express from 'express';

//import db
const dbFunctions = require('./db/db.js');

let dB = dbFunctions.initDb();
dB.serialize(() => {
  dB.run(`CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY,
        report_type text,
        report_name text,
        report_desc text,
        platform text,
        date_added datetime,
        submitted_by text)`);
  dB.run(`CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY,
          username text,
          password text,
          admin text)`);
});
dbFunctions.terminateDb(dB);

//express app setup
const app = express();

//use routes
require('./routes')(app);

export default app;
