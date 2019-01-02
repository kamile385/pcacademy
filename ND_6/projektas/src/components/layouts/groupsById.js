import React from "react";
import { Table } from "react-bootstrap";
import data from '../../MOCK_DATA_groups.json';

export default function Groups({ match }) {
  let group_id = match.params.id;

  let filteredData = data.filter(d => {
    return d.id == group_id;
  });

  return (
    <div>
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
        <a className="btn btn-primary" href={`/groups/${item.id}/edit`} role="button">Edit</a>
        <a className="btn btn-primary" href="/groups" role="button">Delete</a>
        </div>
      ))}
    </div>
  );
}