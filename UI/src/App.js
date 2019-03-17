import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/';
import Footer from './components/footer';
import Login from './components/content/auth/login';
import Signup from './components/content/auth/signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/report/bug" component={Login} />
          <Route exact path="/report/feature" component={Login} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
