const ContentBlock = require('mongoose').model('ContentBlock');

exports.getContent = (request, response, next) => {
  return ContentBlock.findOne({key: request.params.key}, function(err, content) {
    if (err) return next(err);
    response.json(content);
  });
};

exports.getAllContent = (request, response, next) => {
  return ContentBlock.find({}, (err, contentBlocks) => {
    if (err) return next(err);
    response.json(contentBlocks);
  });
};

exports.createContent = (request, response, next) => {
  console.log(request.body);
  let newContent = new ContentBlock(request.body);

  return newContent.save((err, content) => {
    if (err) return next(err);
    response.json(content);
  });
};