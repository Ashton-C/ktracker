const AdminRouter = require('express').Router();

AdminRouter.route('/stats').get(require('./stats.js'));

module.exports = AdminRouter;
