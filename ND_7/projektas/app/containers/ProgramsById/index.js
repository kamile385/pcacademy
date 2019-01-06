import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import data from '../../MOCK_DATA_programs.json';

export default function Programs({ match }) {
  const programId = match.params.id;

  const filteredData = data.filter(d => d.id == programId);

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
          {filteredData.map(item => (
            <tr key={item.id}>
              {Object.keys(item).map(key => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {filteredData.map(item => (
        <div>
          <Link to={`/programs/${item.id}/edit`}>Edit</Link>
          <Link to="/programs">Delete</Link>
        </div>
      ))}
    </div>
  );
}
