var express = require('express');
var router = express.Router();

router.get('/stats', function(req, res) {
  res.json({ response: 'The Stats Page!' });
});

module.exports = router;
