import React from "react";
import { Table } from "react-bootstrap";
import data from '../../MOCK_DATA_attendances.json';
import "../styles/list.css";

export default function Attendances({ match }) {
  let attendance_id = match.params.id;

  let filteredData = data.filter(d => {
    return d.id == attendance_id;
  });

    return (
      <div>
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
        {filteredData.map((item) => (
                <tr key={item.id}>
                    {Object.keys(item).map(key => (
                        <td key={key}>{ item[key] }</td>
                    ))}
                </tr>
            ))}
        </tbody>
      </Table>
      {filteredData.map((item) => (
        <div>
        <a className="btn btn-primary" href={`/attendances/${item.id}/edit`} role="button">Edit</a>
        <a className="btn btn-primary" href="/attendances" role="button">Delete</a>
        </div>
      ))}
      </div>
    );
  }
