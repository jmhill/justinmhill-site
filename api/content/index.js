const content = require('./content.controller.js');

module.exports = app => {
  app.route('/content/:key')
    .get(content.getContent);
  
  app.route('/content')
    .get(content.getAllContent)
    .post(content.createContent);
};