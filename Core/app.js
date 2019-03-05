import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//import db
const dbFunctions = require('./db/db.js');
let dB = dbFunctions.initDb();

let test_data = [
  'BUG',
  'This is a test.',
  'BLAHblahBlahLoremIpsumstuff',
  'UI',
  new Date(),
  'Ashton C.'
];

//test insert sql...this in a dB.run(test_insert_sql, test_data, function(err) {return console.log(err.message)});
let test_insert_sql = `INSERT INTO reports (report_type, report_name, report_desc, platform, date_added, submitted_by) VALUES (?, ?, ?, ?, ?, ?)`;
dB.serialize(() => {
  dB.run(`CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY,
        report_type text,
        report_name text,
        report_desc text,
        platform text,
        date_added datetime,
        submitted_by text)`);
  dB.all(`SELECT * FROM reports`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log(`${row.report_type}, ${row.report_name}, ${row.date_added}`);
    });
  });
});
dbFunctions.terminateDb(dB);

//express app setup
const app = express();

//dotenv
dotenv.config({
  silent: true
});

//use routes
require('./routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
