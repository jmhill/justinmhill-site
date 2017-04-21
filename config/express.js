const express = require('express');
const bodyParser = require('body-parser');

exports.init = function() {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.use(express.static('public'));
  
  return app;
};

