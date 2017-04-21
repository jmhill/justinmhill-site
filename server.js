#!/usr/bin/env node

'use strict';

// Configuration module provides all of the set-up necessary for
// starting the database and configuring the express application
const config = require('./config');

const db = config.mongoose.init();
const app = config.express.init();

// Once the express app is initialized, the API module will
// loop through and set up all of the route callbacks on the app.
const api = require('./api');

app.use('/api', api);

// Catch all random route requests and just send the index again

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

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

app.listen(config.environment.PORT, function() {
  let datetime = new Date();
  let date = datetime.toLocaleDateString();
  let time = datetime.toLocaleTimeString();
  console.log(`${date} ${time} - app started and listening on port: ${config.environment.PORT}`);
});