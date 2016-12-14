
// Test data - remove ASAP and store in DB
const posts = {
  posts: [
    {
      title: "Title 1",
      url: "http://google.com",
      date: "12/1/2016",
      summary: "Summary of blog post number 1",
      id: 1
    },
    {
      title: "Title 2",
      url: "http://google.com",
      date: "12/2/2016",
      summary: "Summary of blog post number 2",
      id: 2
    },
    {
      title: "Title 3",
      url: "http://google.com",
      date: "12/3/2016",
      summary: "Summary of blog post number 3",
      id: 3
    }
  ]
};

module.exports = app => {
  app.route('/posts')
    .get( (request, response) => {
      response.json(posts);
    });
};