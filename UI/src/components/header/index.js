import React, { Component } from 'react';
import Nav from '../nav';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderText">
          <h2>Kraken Bug/Feature Request Tracker</h2>
          <b />
          <p>Made by Ashton Christensen</p>
        </div>
        <div className="HeaderNav">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;
