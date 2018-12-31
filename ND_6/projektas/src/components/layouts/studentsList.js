import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_students.json';
import "../styles/list.css";

export default class StudentsList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Students</PageHeader>
      <a class="btn btn-primary" href="students/new" role="button">Add</a>
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