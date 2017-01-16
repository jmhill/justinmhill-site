const express = require('express');
const bodyParser = require('body-parser');

exports.init = function() {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(express.static('public'));

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });
  
  return app;
};

