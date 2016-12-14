const Post = require('./posts.model.js');

exports.getAllPosts = (request, response) => {
  let posts = Post.find({}, function (err, posts) {
    if (err) next(err);
    response.json(posts);
  });
};