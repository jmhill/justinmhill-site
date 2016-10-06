import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <header className="header">
          <h1 className="brand-title">Justin Hill</h1>
          <h2 className="brand-tagline">A blog and portfolio site focusing on technology, web development, and education.</h2>
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}