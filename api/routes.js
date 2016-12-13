const routeModules = [
  require('./home')
];

exports.setRoutes = function(app) {
  routeModules.forEach(function(route) {
    route(app);
  });
};

