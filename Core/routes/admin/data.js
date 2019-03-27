var express = require('express');
var router = express.Router();

const dbFunctions = require(process.env.DB_FILEPATH);

router.get('/data/:report_type', function(req, res) {
  function queryF() {
    let dB = dbFunctions.initDb();
    let query = dbFunctions.queryReports(dB, req.params.report_type, res);
    dbFunctions.terminateDb(dB);
    return query;
  }
  let query = queryF();
  setTimeout(() => {
    console.log(query);
    //res.json(query);
    res.sendFile('./index.html')
  }, 10);
});

module.exports = router;
