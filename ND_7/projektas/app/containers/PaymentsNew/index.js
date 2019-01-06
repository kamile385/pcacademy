import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Style from './style.css';

export default class NewPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: '',
      amount: '',
      state_financing: '',
      praise: '',
      not_first_year: '',
      second_program: '',
    };
  }

  validateForm() {
    return (
      (this.state.month.length &&
        this.state.amount.length &&
        this.state.state_financing.length &&
        this.state.praise.length &&
        this.state.not_first_year.length &&
        this.state.second_program.length) > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="NewProgram">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="month" bsSize="large">
            <ControlLabel>Month</ControlLabel>
            <FormControl
              value={this.state.month}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="amount" bsSize="large">
            <ControlLabel>Amount</ControlLabel>
            <FormControl
              value={this.state.amount}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="state_financing">
            <ControlLabel>State financing</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.state_financing}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="praise" bsSize="large">
            <ControlLabel>Praise</ControlLabel>
            <FormControl
              value={this.state.praise}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="not_first_year" bsSize="large">
            <ControlLabel>Not first year</ControlLabel>
            <FormControl
              value={this.state.not_first_year}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="second_program" bsSize="large">
            <ControlLabel>Second program</ControlLabel>
            <FormControl
              value={this.state.second_program}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    );
  }
}
