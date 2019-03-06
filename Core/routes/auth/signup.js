var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.json({ response: 'The Signup Page!' });
});

module.exports = router;
