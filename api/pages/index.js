
module.exports = router => {
  router.route('/pages')
    .get(function(request, response) {
      response.send("Not implemented");
    });
  
  return router;
};