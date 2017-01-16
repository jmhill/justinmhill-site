const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.getPosts = (request, response) => {
  let posts = Post.find({}, function (err, posts) {
    if (err) next(err);
    response.json(posts);
  });
  return posts;
};

exports.createPost = (request, response) => {
  let post = new Post(request.body);
  return post.save((err, post) => {
    if (err) next(err);
    response.json(post);
  });
};