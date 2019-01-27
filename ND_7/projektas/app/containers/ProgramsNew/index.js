import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class NewProgram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      group_grade: '',
      content: '',
    };
  }

  validateForm() {
    return this.state.content.length > 0;
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
          <FormGroup controlId="content">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
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
