const posts = require('./posts.controller.js');

module.exports = router => {
  router.route('/posts')
    .get(posts.getPosts)
    .post(posts.createPost);
  
  return router;
};