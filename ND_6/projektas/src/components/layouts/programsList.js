import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_programs.json';
import "../styles/list.css";

export default class ProgramsList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Programs</PageHeader>
      <a class="btn btn-primary" href="programs/new" role="button">Add</a>
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