import React, { Component } from 'react';

export default class Container extends Component {
  render () {
    return (
      <div id="form-container">
        <input type="text" id="fname-input" placeholder="First Name" />
        <input type="text" id="lname-input" placeholder="Last Name" />
        <input type="email" id="email-input" placeholder="Enter your email" />
        <input type="password" id="password-input" placeholder="Enter password"/>
        <input type="password" id="password-confirm-input" placeholder="Confirm password"/>
      </div>
    );
  }
}
