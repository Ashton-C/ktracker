module.exports = function(app) {
  app.use('/auth', require('./auth'));
  app.use('/report', require('./report'));
  app.use('/admin', require('./admin'));
};
