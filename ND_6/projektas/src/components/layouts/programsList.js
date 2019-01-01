import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_programs.json';
import "../styles/list.css";

export default class ProgramsList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Programs</PageHeader>
      <a className="btn btn-primary" href="programs/new" role="button">Add</a>
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
                <tr key={item.id}>
                    <td><a href={`/programs/${item.id}`}>{item.id}</a></td>
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