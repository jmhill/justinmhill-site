const path = require('path');

module.exports = function(app) {
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'));
  });
};