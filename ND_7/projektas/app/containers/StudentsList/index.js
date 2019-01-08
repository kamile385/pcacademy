import React from 'react';
import { Table, PageHeader, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentsNew from 'containers/StudentsNew';
import data from '../../MOCK_DATA_students.json';
import Style from './style.css';

export default class StudentsList extends React.Component {
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
        <PageHeader>Students</PageHeader>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <StudentsNew />
          </Modal.Body>
        </Modal>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>STUDENT NAME SURNAME</th>
              <th>PARENT NAME SURNAME</th>
              <th>ADDRESS</th>
              <th>TELEPHONE</th>
              <th>EMAIL</th>
              <th>GROUP</th>
              <th>IDENTIFICATION NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link to={`/students/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.student_name_surname}</td>
                <td>{item.parent_name_surname}</td>
                <td>{item.address}</td>
                <td>{item.telephone}</td>
                <td>{item.email}</td>
                <td>{item.group}</td>
                <td>{item.identification_number}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
