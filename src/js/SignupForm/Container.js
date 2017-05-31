import React, { Component } from 'react';

export default class Container extends Component {
  render () {
    return (
      <div id="form-container">
        <div className="name-container">
          <input type="text" id="fname-input" placeholder="First Name" />
          <input type="text" id="lname-input" placeholder="Last Name" />
        </div>
        <div className="name-container">
          <input type="email" id="email-input" placeholder="Email" />
          <input type="password" id="password-input" placeholder="password"/>
        </div>
        <button>Sign Up</button>
      </div>
    );
  }
}
