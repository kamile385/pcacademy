import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import data from '../../MOCK_DATA_students.json';

export default function Students({ match }) {
  const studentId = match.params.id;

  const filteredData = data.filter(d => d.id == studentId);

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
          <Link to={`/students/${item.id}/edit`}>Edit</Link>
          <Link to="/students">Delete</Link>
        </div>
      ))}
    </div>
  );
}
