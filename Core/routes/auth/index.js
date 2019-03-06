const AuthRouter = require('express').Router();

AuthRouter.route('/login').get(require('./login.js'));
AuthRouter.route('/signup').get(require('./signup.js'));

module.exports = AuthRouter;
