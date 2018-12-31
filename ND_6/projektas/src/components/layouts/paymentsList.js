import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_payments.json';
import "../styles/list.css";

export default class PaymentsList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Payments</PageHeader>
      <a class="btn btn-primary" href="payments/new" role="button">Add</a>
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
            {data.map((item) => (
                <tr>
                    {Object.keys(item).map(key => (
                        <td>{item[key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
      </Table>
      </div>
    );
  }
}