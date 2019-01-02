import React from "react";
import { Table } from "react-bootstrap";
import data from '../../MOCK_DATA_students.json';

export default function Students({ match }) {
  let student_id = match.params.id;

  let filteredData = data.filter(d => {
    return d.id == student_id;
  });

  return (
    <div>
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
        <a className="btn btn-primary" href={`/students/${item.id}/edit`} role="button">Edit</a>
        <a className="btn btn-primary" href="/stdents" role="button">Delete</a>
        </div>
      ))}
    </div>
  );
}