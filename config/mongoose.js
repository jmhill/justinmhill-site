const env = require('./env').env;
const mongoose = require('mongoose');

module.exports = function() {
  const db = mongoose.connect(env.db);

  // register models here
  // require('../api/posts/posts.model.js');

  // error handling
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  
  return db;
}