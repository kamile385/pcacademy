import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/new.css";

export default class NewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student_name_surname: "",
      parent_name_surname: "",
      address: "",
      telephone: "",
      email: "",
      group: "",
      identification_number: ""
    };
  }

  validateForm() {
    return (this.state.student_name_surname.length && 
            this.state.parent_name_surname.length &&
            this.state.address.length &&
            this.state.telephone.length &&
            this.state.email.length &&
            this.state.group.length &&
            this.state.identification_number.length) > 0;
            
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
          <FormGroup controlId="student_name_surname" bsSize="large">
            <ControlLabel>Student name surname</ControlLabel>
            <FormControl
              value={ this.state.student_name_surname }
              onChange={ this.handleChange }
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="parent_name_surname" bsSize="large">
            <ControlLabel>Parent name surname</ControlLabel>
            <FormControl
              value={ this.state.parent_name_surname }
              onChange={ this.handleChange }
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="address">
            <ControlLabel>Address</ControlLabel>
            <FormControl
              value={this.state.address}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="telephone">
            <ControlLabel>Telephone</ControlLabel>
            <FormControl
              value={this.state.telephone}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="group">
            <ControlLabel>Group</ControlLabel>
            <FormControl
              value={this.state.group}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="identification_number">
            <ControlLabel>Identification number</ControlLabel>
            <FormControl
              value={this.state.identification_number}
              onChange={this.handleChange}
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