import React, { Component } from 'react';

export default class SignUpFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Confirm password</label>
            <input
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
              name="confirmPassword"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-block btn-lg btn btn-dark"
              type="submit"
              disabled={!this.validateForm()}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
