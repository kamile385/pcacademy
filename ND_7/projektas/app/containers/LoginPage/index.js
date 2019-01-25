import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('email', this.state.email);
    alert('logged in');
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
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
              <button
                className="btn btn-block btn-lg btn btn-dark"
                type="submit"
                disabled={!this.validateForm()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
