const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function() {
  const ContentBlockSchema = new Schema({
    key: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: String
  });

  mongoose.model('ContentBlock', ContentBlockSchema);
};