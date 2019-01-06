import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Style from './style.css';

export default class NewGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      group_grade: '',
      day_of_week: '',
      time_from: '',
      time_to: '',
    };
  }

  validateForm() {
    return (
      (this.state.name.length &&
        this.state.group_grade.length &&
        this.state.day_of_week.length &&
        this.state.time_from.length &&
        this.state.time_to.length) > 0
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
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="group_grade" bsSize="large">
            <ControlLabel>Group grade</ControlLabel>
            <FormControl
              value={this.state.group_grade}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="day_of_week">
            <ControlLabel>Day of week</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.day_of_week}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="time_from" bsSize="large">
            <ControlLabel>Group grade</ControlLabel>
            <FormControl
              value={this.state.time_from}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="time_to" bsSize="large">
            <ControlLabel>Time to</ControlLabel>
            <FormControl
              value={this.state.time_to}
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
