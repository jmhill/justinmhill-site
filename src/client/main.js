import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './components/MainLayout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById("root"));