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
        <button className="button-long">Sign Up</button>

        <div className="button-container">
          <button className="button-long with-icon facebook">
            <svg className="icon facebook">
              <use href="#facebook"/>
            </svg>
            <span>Login with Facebook</span>
          </button>
        </div>
        <span className="flaticon flaticon-facebook-logo-outline"></span>
      </div>
    );
  }
}
