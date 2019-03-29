import React, { Component } from 'react';

export default class Bug extends Component {
  render() {
    return (
      <div className="Bug">
        <h2>Bug Report</h2>
        <form>
          <input type="text" name="name" placeholder="Bug Name" />
          <br />
          <input type="text" name="description" placeholder="Description" />
          <br />
          <label>
            <input
              type="radio"
              name="platform"
              value="UI (Web)"
              placeholder="UI (Web)"
            />
            UI (Web)
          </label>
          <br />
          <label>
            <input type="radio" name="platform" value="Distro (Windows .exe)" />
            Distro (Windows .exe)
          </label>
          <br />
          <button type="submit" name="submit" onClick={this.handleSubmit}>
            Submit!
          </button>
        </form>
      </div>
    );
  }
}
