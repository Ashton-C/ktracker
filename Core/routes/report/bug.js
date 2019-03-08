var express = require('express');
var router = express.Router();
import bodyParser from 'body-parser';

const dbFunctions = require('E:/GitHub/ktracker/Core/db/db.js');
// const dbFunctions = require('/home/ashton/react-projects/ktracker/Core/db/db.js');
const jsonParser = bodyParser.json();

router.post('/bug', jsonParser, function(req, res) {
  let report_type = 'bug';
  let date_added = new Date();
  let report_name = req.body.report_name;
  let report_desc = req.body.report_desc;
  let platform = req.body.platform;
  let submitted_by = req.body.submitted_by;

  let dB = dbFunctions.initDb();

  dbFunctions.createReport(
    dB,
    report_type,
    report_name,
    report_desc,
    platform,
    submitted_by,
    date_added
  );

  res.json({ response: `Thank you for reporting bug: ${report_name}!` });

  dbFunctions.terminateDb(dB);
});

module.exports = router;
