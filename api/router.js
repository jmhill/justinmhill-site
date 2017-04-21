const router = require('express').Router();

const routeModules = [
  require('./posts'),
  require('./content'),
  require('./pages')
];

function createApiRouter(router, routes) {
  return routes.reduce(function(routerObj, routeModule) {
    return routeModule(routerObj);
  }, router);
}

const apiRouter = createApiRouter(router, routeModules);

module.exports = apiRouter;



