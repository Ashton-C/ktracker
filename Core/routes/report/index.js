const ReportRouter = require('express').Router();

ReportRouter.route('/bug').post(require('./bug.js'));
ReportRouter.route('/feature').post(require('./feature.js'));

module.exports = ReportRouter;
