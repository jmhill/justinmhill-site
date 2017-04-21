import React from 'react';
import NavBar from './NavBar.js';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="layout pure-g">
        <NavBar />
        <div className="content pure-u-1 pure-u-md-3-4 ">
          {this.props.children}
        </div>
      </div>
    );
  }
}
