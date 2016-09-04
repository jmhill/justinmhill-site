const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('../app').setRoutes;

module.exports = function() {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Route registration:
  // Application routers are configured within
  // a setRoutes function in app/app.js, and this
  // function is exposed by the app module. The 
  // setRoutes function takes the express app
  // as a parameter and adds all routers.

  setRoutes(app);

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
  
  return app;
};

