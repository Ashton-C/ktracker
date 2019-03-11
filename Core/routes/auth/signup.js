var express = require('express');
var router = express.Router();
import bodyParser from 'body-parser';

const dbFunctions = require(process.env.DB_FILEPATH);
const jsonParser = bodyParser.json();

function validateUser(user) {
  const validUsername =
    typeof user.username == 'string' && user.username.trim() != '';
  const validPassword =
    typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
  return validUsername && validPassword;
}
router.post('/signup', jsonParser, function(req, res) {
  let user = req.body;
  if (validateUser(user)) {
    let dB = dbFunctions.initDb();
    dbFunctions.createUser(dB, user.username, user.password);
    dbFunctions.terminateDb;
    res.json({ message: 'welcome to ktracker!' });
  } else {
    res.json({ message: 'Invalid username or password.' });
  }
});

module.exports = router;
