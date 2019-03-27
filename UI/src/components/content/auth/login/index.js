import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h3>Login</h3>
        <form>
          <span>
            Username:
            <input
              type="text"
              required
              autoComplete="true"
              minLength={6}
              placeholder="Username"
              name="username"
            />
          </span>
          <span>
            Password:
            <input
              type="password"
              required
              autoComplete="true"
              minLength={6}
              placeholder="Password"
              name="password"
            />
          </span>
          <button onClick={this.handleSubmit} type="submit" name="submitLogin">
            Login!
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
