var express = require('express');
var router = express.Router();
import bodyParser from 'body-parser';
import { createReadStream } from 'fs';

const dbFunctions = require('E:/GitHub/ktracker/Core/db/db.js');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/bug', jsonParser, function(req, res) {
  let report_type = req.body.report_type;
  let report_name = req.body.report_name;
  let date_added = new Date();
  let sql = `INSERT INTO reports (report_type, report_name, date_added) VALUES (?, ?, ?)`;

  let dB = dbFunctions.initDb();
  async function create() {
    let data = [];
    dB.serialize(() => {
      dB.run(sql, [report_type, report_name, date_added]);
      dB.all(`SELECT * FROM reports ORDER BY date_added`, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          data.push(
            `This is report id # ${row.id}, it is a ${
              row.report_type
            }, it's name is ${row.report_name}, and it was added on ${
              row.date_added
            }.`
          );
          console.log(
            `This is report id # ${row.id}, it is a ${
              row.report_type
            }, it's name is ${row.report_name}, and it was added on ${
              row.date_added
            }.`
          );
        });
      });
    });
    return data;
  }
  response(create());
  dbFunctions.terminateDb(dB);

  async function response(resData) {
    res.json({ response: resData });
  }
});

module.exports = router;
