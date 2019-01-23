import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { getStudents, createStudent } from './actions';

export default class Signup extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <SignUpForm />
      </div>
    );
  }
}
