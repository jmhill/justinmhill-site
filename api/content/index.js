const content = require('./content.controller.js');

module.exports = router => {
  router.route('/content/:key')
    .get(content.getContent);
  
  router.route('/content')
    .get(content.getAllContent)
    .post(content.createContent);

  return router;
};