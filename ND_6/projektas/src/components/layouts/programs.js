import React from "react";
import { Table } from "react-bootstrap";
import data from '../../MOCK_DATA_programs.json';

export default function Programs({ match }) {
  let program_id = match.params.id;

  // if(isNaN(program_id))
  // {
  // }

  let filteredData = data.filter(d => {
    return d.id == program_id;
  });

  return (
    <div>
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
        {filteredData.map((item) => (
                <tr key={item.id}>
                    {Object.keys(item).map(key => (
                        <td key={key}>{ item[key] }</td>
                    ))}
                </tr>
            ))}
        </tbody>
      </Table>
      <a className="btn btn-primary" href="/programs/edit" role="button">Edit</a>
      <a className="btn btn-primary" href="/programs" role="button">Delete</a>
    </div>
  );
}