import React from 'react';
import { Table, PageHeader, Button, Modal } from 'react-bootstrap';
import GroupsNew from 'containers/GroupsNew';
import Style from './style.css';
import data from '../../MOCK_DATA_groups.json';

export default class GroupsList extends React.Component {
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
        <PageHeader>Groups</PageHeader>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <GroupsNew />
          </Modal.Body>
        </Modal>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GROUP GRADE</th>
              <th>DAY OF WEEK</th>
              <th>TIME FROM</th>
              <th>TIME TO</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <a href={`/groups/${item.id}`}>{item.id}</a>
                </td>
                <td>{item.name}</td>
                <td>{item.group_grade}</td>
                <td>{item.day_of_week}</td>
                <td>{item.time_from}</td>
                <td>{item.time_to}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
