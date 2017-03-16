const env = require('./env').env;
const mongoose = require('mongoose');

exports.init = function() {
  const db = mongoose.connect(env.db);

  // Set mongoose to use standard ES2015 Promises
  mongoose.Promise = global.Promise;

  // register models here
  require('../api/posts/posts.model.js')();
  require('../api/content/content.model.js')();

  console.log(mongoose.modelNames());

  mongoose.connection.on('connected', function() {
    console.log("Mongoose connected to db at uri: " + env.db);
  });
  // error handling
  mongoose.connection.on('error', function(error) {
    console.error('connection error:' + error);
  });
  
  return db;
};