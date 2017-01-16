// Configuration module containing environment information and
// set up config for individual application components
const environment = require('./env').env;
const mongoose = require('./mongoose');
const express = require('./express');

module.exports = {
  // contains an object with information such as
  // port number, database connection strings, etc.
  environment: environment,

  // function containing mongoose set-up
  mongoose: mongoose,
  
  // function containing all set-up information for
  // creating an express application on the server
  express: express

};