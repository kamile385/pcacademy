import React, { Component } from "react";
import { Table, PageHeader } from "react-bootstrap";
import data from '../../MOCK_DATA_groups.json';
import "../styles/list.css";

export default class GroupsList extends Component {
  render() {
    return (
      <div className="List">
      <PageHeader>Groups</PageHeader>
      <a class="btn btn-primary" href="groups/new" role="button">Add</a>
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