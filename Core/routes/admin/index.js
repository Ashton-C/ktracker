const AdminRouter = require('express').Router();

AdminRouter.route('/data/:route_type').get(require('./data.js'));

module.exports = AdminRouter;
