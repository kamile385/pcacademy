import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_attendances.json';
import "../styles/list.css";

export default class AttendancesList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Attendances</PageHeader>
      <a class="btn btn-primary" href="attendances/new" role="button">Add</a>
        <Table responsive>
        <thead>
            <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>REMARK</th>
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