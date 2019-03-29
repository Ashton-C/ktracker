import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/header/';
import Footer from './components/footer';
import Login from './components/content/auth/login';
import Signup from './components/content/auth/signup';
import Report from './components/content/report';
import Success from './components/success';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: ''
    };
  }

  handleLogIn = user => {
    this.setState({
      userLoggedIn: user
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <div className="root">
                  {this.state.userLoggedIn ? (
                    <div className="isLoggedIn">
                      <h2>
                        Welcome back to KTracker! You can now make a report:
                      </h2>
                      <br />
                      <h3>
                        <Link className="NavLink" to="/report/bug">
                          <p>Bug</p>
                        </Link>
                        <br />
                        OR
                        <br />
                        <Link className="NavLink" to="/report/feature">
                          <p>Feature</p>
                        </Link>
                      </h3>
                    </div>
                  ) : (
                    <div className="notLoggedIn">
                      <h2>
                        Welcome to KTracker! Please login or signup to get
                        started.
                      </h2>
                      <br />
                      <h3>
                        <Link className="NavLink" to="/auth/signup">
                          <p>Signup</p>
                        </Link>
                        <br />
                        OR
                        <br />
                        <Link className="NavLink" to="/auth/login">
                          <p>Login</p>
                        </Link>
                      </h3>
                    </div>
                  )}
                </div>
              )}
            />
            <Route
              exact
              path="/auth/signup"
              render={props => (
                <Signup {...props} user={this.state.userLoggedIn} />
              )}
            />
            <Route
              exact
              path="/auth/login"
              render={props => (
                <Login
                  {...props}
                  onLogIn={this.handleLogIn}
                  user={this.state.userLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/report/bug"
              render={props => (
                <Report {...props} type="Bug" user={this.state.userLoggedIn} />
              )}
            />
            <Route
              exact
              path="/report/feature"
              render={props => (
                <Report
                  {...props}
                  type="Feature"
                  user={this.state.userLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/success"
              render={props => <Success {...props} />}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
