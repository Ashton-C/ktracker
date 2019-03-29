import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  logIn = (username, password) => {
    let url = 'www.kraktracker.xyz/api/auth/login';
    let data = { username: username, password: password };
    console.log(data);
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.props.onLogIn(json.user);
        console.log(json);
      });
  };
  handleSubmit = async event => {
    try {
      await this.logIn(this.state.username, this.state.password);
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  handleFormChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    let userLoggedIn = this.props.user;
    return (
      <div className="Login">
        <h2>Login</h2>
        <br />
        {userLoggedIn ? (
          <p>You are already logged in! You can now make a report!</p>
        ) : (
          <form>
            <span>
              <input
                type="text"
                required
                autoComplete="true"
                minLength={6}
                placeholder="Username"
                name="username"
                onChange={this.handleFormChange}
              />
            </span>
            <br />
            <span>
              <input
                type="password"
                required
                autoComplete="true"
                minLength={6}
                placeholder="Password"
                name="password"
                onChange={this.handleFormChange}
              />
            </span>
            <br />
            <button
              onClick={this.handleSubmit}
              type="submit"
              name="submitLogin"
            >
              Login!
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
