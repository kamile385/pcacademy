import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "../styles/signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    alert('signed up');
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            />
        </FormGroup>
        <Button
            block
            bsSize="large"
            disabled={ !this.validateForm() }
            type="submit"
            >
            Sign Up
            </Button>
        </form>
      </div>
    );
  }
}