import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/new.css";

export default class NewAttendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      status: "",
      remark: ""
    };
  }

  validateForm() {
    return (this.state.status.length && this.state.date.length) > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="NewProgram">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="date" bsSize="large">
            <ControlLabel>Date</ControlLabel>
            <FormControl
              value={ this.state.date }
              onChange={ this.handleChange }
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="status" bsSize="large">
            <ControlLabel>Status</ControlLabel>
            <FormControl
              value={ this.state.status }
              onChange={ this.handleChange }
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="remark">
            <ControlLabel>Remark</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.remark}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={ !this.validateForm() }
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    );
  }
}