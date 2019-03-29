import React, { Component } from 'react';

export default class Feature extends Component {
  render() {
    return (
      <div className="Feature">
        <h2>Feature Request</h2>
        <form>
          <input type="text" name="name" placeholder="Feature Request Name" />
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
