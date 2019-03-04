var express = require('express');
var router = express.Router();

router.get('/feature', function(req, res) {
  res.json({ response: 'The Feature Page!' });
});

module.exports = router;
