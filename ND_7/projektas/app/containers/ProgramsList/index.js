import React from 'react';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Button, Modal } from 'react-bootstrap';
import data from '../../MOCK_DATA_programs.json';
import ProgramsNew from '../ProgramsNew';

export default class ProgramsList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="List">
        <h3>Programs</h3>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <ProgramsNew />
          </Modal.Body>
        </Modal>

        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GROUP GRADE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link to={`/programs/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.name}</td>
                <td>{item.group_grade}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
