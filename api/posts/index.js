const posts = require('./posts.controller.js');

module.exports = app => {
  app.route('/posts')
    .get(posts.getPosts)
    .post(posts.createPost);
};