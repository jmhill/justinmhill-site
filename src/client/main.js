import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './components/MainLayout';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
    </Route>
  </Router>
), document.getElementById("root"));