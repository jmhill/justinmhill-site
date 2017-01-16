const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function() {
  const PostSchema = new Schema({
    title: String,
    datePublished: Date,
    summary: String,
    content: String,
    url: String

  });

  mongoose.model('Post', PostSchema);
};

