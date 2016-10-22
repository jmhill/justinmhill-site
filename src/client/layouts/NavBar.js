import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <header className="header">
          <h1 className="brand-title"><Link to="/">Justin Hill</Link></h1>
          <h2 className="brand-tagline">A blog and portfolio site focusing on technology, web development, and education.</h2>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/about" className="pure-button">About</Link></li>
              <li className="nav-item"><Link to="/blog" className="pure-button">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="pure-button">Contact</Link></li>
              <li className="nav-item"><Link to="/projects" className="pure-button">Projects</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}