const router = require('express').Router();

router.get('/', function(request, response) {
  response.render('home');
})

module.exports = router;