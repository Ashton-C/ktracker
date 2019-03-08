var express = require('express');
var router = express.Router();
import bodyParser from 'body-parser';

const dbFunctions = require('E:/GitHub/ktracker/Core/db/db.js');
// const dbFunctions = require('/home/ashton/react-projects/ktracker/Core/db/db.js');
const jsonParser = bodyParser.json();

let userDataForValidation = [];

function validateUser(user) {
  const validUsername =
    typeof user.username == 'string' && user.username.trim() != '';
  const validPassword =
    typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
  return validUsername && validPassword;
}

function waitForData(userDataForValidation) {
  setTimeout(() => {
    console.log(userDataForValidation);
    return userDataForValidation;
  }, 10);
  return userDataForValidation;
}

async function checkMatches(dbData) {
  console.log(dbData);
  return false;
}

router.post('/login', jsonParser, function(req, res) {
  let user = req.body;
  let loginSuccess = false;
  if (validateUser(user)) {
    let dB = dbFunctions.initDb();
    dbFunctions.terminateDb(dB);
    loginSuccess = checkMatches(
      dbFunctions.loginUser(dB, user.username, user.password)
    );
    if (loginSuccess) {
      res.json({ message: 'welcome back to ktracker!', success: 'true' });
    } else {
      res.json({
        message: 'Invalid username or password. Please try again!',
        success: 'false'
      });
    }
  }
});

module.exports = router;
