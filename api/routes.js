const routeModules = [
  require('./posts'),
  require('./content'),
  // Home must always be last - it has the wildcard router
  require('./home')
];

exports.setRoutes = function(app) {
  routeModules.forEach(function(route) {
    route(app);
  });
};

