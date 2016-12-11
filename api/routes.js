const home = require('./home');

exports.setRoutes = function(app) {
  home(app);
};

