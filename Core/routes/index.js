module.exports = function(app) {
  app.use('/api/auth', require('./auth'));
  app.use('/api/report', require('./report'));
  app.use('/api/admin', require('./admin'));
};
