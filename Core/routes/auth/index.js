const AuthRouter = require('express').Router();

AuthRouter.route('/login').post(require('./login.js'));
AuthRouter.route('/signup').post(require('./signup.js'));

module.exports = AuthRouter;
