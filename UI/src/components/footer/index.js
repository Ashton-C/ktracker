import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Made by Ashton Christensen - 2019</p>
        <div className="socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ashton-C"
          >
            <img
              src={require('E:/GitHub/ktracker/UI/src/GitHub-Mark-Light-32px.png')}
              alt="Github Logo"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/_Ashton_C"
          >
            <img
              src={require('E:/GitHub/ktracker/UI/src/Twitter_Social_Icon_Rounded_Square_Color.png')}
              alt="Twitter Logo"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ashton.christensen27@gmail.com?subject=Ktracker Feedback"
          >
            <img
              src={require('E:/GitHub/ktracker/UI/src/logo_gmail_32px.png')}
              alt="Gmail Logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
