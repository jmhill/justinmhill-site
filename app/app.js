const home = require('./home');

exports.setRoutes = function(app) {
  app.use('/', home);
};

