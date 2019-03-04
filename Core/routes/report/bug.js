var express = require('express');
var router = express.Router();

router.get('/bug', function(req, res) {
  res.json({ response: 'The Bug Page!' });
});

module.exports = router;
