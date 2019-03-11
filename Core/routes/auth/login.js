var express = require('express');
var router = express.Router();
import bodyParser from 'body-parser';

const dbFunctions = require(process.env.DB_FILEPATH);
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

// function queryForUser(db, user, callback) {
//   let storedData = dbFunctions.loginUser(db, user.username, user.password, callback());
//   let loginSuccess = callback(user, storedData, sendRes);
//   return loginSuccess;
// }

function checkForMatch(user, dataFromDb, callback) {
  let mes = '';
  console.log(dataFromDb);
  if (dataFromDb) {
    if (dataFromDb.username === user.username) {
      console.log('User Matches');
      if (dataFromDb.password === user.password) {
        mes = 'Password matches! Login should succeed!';
        console.log(mes);
        callback(true, mes);
      } else {
        mes = 'Password does not match!';
        console.log(mes);
        callback(false, mes);
      }
    } else {
      mes = 'User does not match or exist.';
      console.log(mes);
      callback(false, mes);
    }
  } else {
    mes = 'User not found!';
    callback(false, mes);
  }
}

router.post('/login', jsonParser, function(req, res) {
  function sendRes(success, mes) {
    res.json({ loginSuccess: success, message: mes });
  }

  let user = req.body;
  if (validateUser(user)) {
    let match = dbFunctions.loginUser(user, userDbData => {
      checkForMatch(user, userDbData, sendRes);
    });
  }
});

module.exports = router;
