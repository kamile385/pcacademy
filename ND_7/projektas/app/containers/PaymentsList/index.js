import React from 'react';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Button, Modal } from 'react-bootstrap';
import data from '../../MOCK_DATA_payments.json';
import PaymentsNew from '../PaymentsNew';
import Style from './style.css';

export default class PaymentsList extends React.Component {
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
        <PageHeader>Payments</PageHeader>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <PaymentsNew />
          </Modal.Body>
        </Modal>
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>MONTH</th>
              <th>AMOUNT</th>
              <th>STATE FINANCING</th>
              <th>PRAISE</th>
              <th>NOT FIRST YEAR</th>
              <th>SECOND PROGRAM</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <a href={`/payments/${item.id}`}>{item.id}</a>
                </td>
                <td>{item.month}</td>
                <td>{item.amount}</td>
                <td>{item.state_financing}</td>
                <td>{item.praise}</td>
                <td>{item.not_first_year}</td>
                <td>{item.second_program}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
