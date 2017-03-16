#!/usr/bin/env node

'use strict';

// Configuration module provides all of the set-up necessary for
// starting the database and configuring the express application
const config = require('./config');

const db = config.mongoose.init();
const app = config.express.init();

// Once the express app is initialized, the API module will
// loop through and set up all of the route callbacks on the app.
const routes = require('./api');
routes.setRoutes(app);

app.listen(config.environment.PORT, function() {
  let datetime = new Date();
  let date = datetime.toLocaleDateString();
  let time = datetime.toLocaleTimeString();
  console.log(`${date} ${time} - app started and listening on port: ${config.environment.PORT}`);
});