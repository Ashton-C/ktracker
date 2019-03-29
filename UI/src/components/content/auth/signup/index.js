import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: '',
      password: '',
      agreeToTerms: false,
      readyToSubmit: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleFormChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    if (this.state.agreeToTerms && this.state.username && this.state.password) {
      this.setState({ readyToSubmit: true });
    }
  };

  signUp = (username, password) => {
    let url = 'www.kraktracker.xyz/api/auth/signup';
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
        console.log(json);
      });
  };

  handleSubmit = async event => {
    try {
      await this.signUp(this.state.username, this.state.password);
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
    }
  };
  componentDidUpdate() {
    if (!this.state.readyToSubmit) {
      if (
        this.state.agreeToTerms &&
        this.state.username &&
        this.state.password
      ) {
        this.setState({ readyToSubmit: true });
      }
    }
  }
  render() {
    let userLoggedIn = this.props.user;
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <br />
        {userLoggedIn ? (
          <p className="useralreadyloggedin">You are already logged in!</p>
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
                value={this.state.username}
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
                value={this.state.password}
                onChange={this.handleFormChange}
              />
            </span>
            <br />
            <span>
              <input
                type="checkbox"
                name="agreeToTerms"
                required
                value={this.state.agreeToTerms}
                onChange={this.handleFormChange}
              />
              I agree to the terms of service.
            </span>
            <br />
            {this.state.readyToSubmit ? (
              <button
                onClick={() =>
                  this.handleSubmit(this.state.username, this.state.password)
                }
                type="submit"
                name="submitSignup"
              >
                Signup!
              </button>
            ) : (
              <button
                onClick={this.handleSubmit}
                type="submit"
                disabled="disabled"
                name="submitSignup"
              >
                Signup!
              </button>
            )}
          </form>
        )}
      </div>
    );
  }
}

export default Signup;
