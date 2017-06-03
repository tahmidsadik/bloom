// @flow
import React, { Component } from 'react';
import Container from './Container';
import Banner from './Banner';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Container />
      </div>
    );
  }
}
