import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportType: '',
      redirect: false,
      username: this.props.userLoggedIn,
      readyToSubmit: false,
      name: '',
      desc: '',
      platform: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.sendReport = this.sendReport.bind(this);
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  handleFormChange = event => {
    const target = event.target;
    const value = target.type === 'radio' ? target.value : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    if (this.state.name && this.state.desc && this.state.platform) {
      this.setState({ readyToSubmit: true });
    }
  };
  handleSubmit = async event => {
    try {
      await this.sendReport(
        this.state.name,
        this.state.desc,
        this.state.platform,
        this.state.username
      );
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
    }
  };
  sendReport = (name, desc, platform, currentUser) => {
    let reportType = this.props.reportType;
    let url = `www.kraktracker.xyz/api/report/${reportType}`;
    let data = {
      report_name: name,
      report_desc: desc,
      platform: platform,
      submitted_by: currentUser
    };
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

  componentDidMount() {
    this.setState({
      username: this.props.user,
      reportType: this.props.type
    });
  }

  render() {
    const userLoggedIn = this.state.username;
    let reportType = this.state.reportType;
    return (
      <div className="Report">
        {userLoggedIn ? (
          <div>
            {reportType === 'Feature' ? (
              <h2>Feature Request</h2>
            ) : (
              <h2>Bug Report</h2>
            )}
            <form>
              <input
                type="text"
                name="name"
                placeholder="Report Request Name"
                required
                onChange={this.handleFormChange}
              />
              <br />
              <textarea
                name="desc"
                placeholder="Description"
                required
                onChange={this.handleFormChange}
              />
              <br />
              <div className="Reportradios">
                <label>
                  <input
                    type="radio"
                    name="platform"
                    value="UI (Web)"
                    onChange={this.handleFormChange}
                  />
                  UI (Web)
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="platform"
                    value="Distro (Windows .exe)"
                    onChange={this.handleFormChange}
                  />
                  Distro (Windows .exe)
                </label>
              </div>
              <br />
              {this.state.readyToSubmit ? (
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  name="submitReport"
                >
                  Report!
                </button>
              ) : (
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  disabled="disabled"
                  name="submitReport"
                >
                  Report!
                </button>
              )}
            </form>
          </div>
        ) : (
          <div className="notLoggedIn">
            <h2>Welcome to KTracker! Please login or signup to get started.</h2>
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
    );
  }
}
