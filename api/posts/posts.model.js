const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  datePublished: Date,
  summary: String,
  content: String,
  url: String
});

module.exports = mongoose.model('Post', postSchema);
