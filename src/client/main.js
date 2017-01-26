import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './layouts/MainLayout.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import NotFound from './pages/NotFound.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
      <Route path="projects" component={Projects} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById("root"));