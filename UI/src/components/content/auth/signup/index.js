import React, { Component } from 'react';
import './styles.css';

class Signup extends Component {
  handleSubmit = () => {
    fetch('')
  };
  render() {
    return (
      <div className="Signup">
        <h2>
          Signup<span id="h2" />
        </h2>

        <br />
        <form>
          <span>
            <input
              type="text"
              required
              autoComplete="true"
              minLength={6}
              placeholder="Username"
              name="username"
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
            />
          </span>
          <br />
          <span>
            <input type="checkbox" name="agreetoterms" />I agree to the terms of
            service.
          </span>
          <br />
          <button onClick={this.handleSubmit} type="submit" name="submitSignup">
            Signup!
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
