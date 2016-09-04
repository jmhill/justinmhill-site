const router = require('express').Router();

router.get('/', function(request, response) {
  response.send("Home page");
})

module.exports = router;