const router = require('express').Router();

router.get('/', function(request, response) {
  response.render('home', { title: "Justin Hill" });
})

module.exports = router;