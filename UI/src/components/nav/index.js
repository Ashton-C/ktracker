import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <Link className="NavLink" to="/auth/signup">
            Signup
          </Link>
          <Link className="NavLink" to="/auth/login">
            Login
          </Link>
          <Link className="NavLink" to="/report/bug">
            Bug
          </Link>
          <Link className="NavLink" to="/report/feature">
            Feature Request
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
