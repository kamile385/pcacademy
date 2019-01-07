import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import data from '../../MOCK_DATA_groups.json';

export default function Groups({ match }) {
  const groupId = match.params.id;

  const filteredData = data.filter(d => d.id == groupId);

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
        <div key={item.id}>
          <Link to={`/groups/${item.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <Link to="/groups">
            <button type="button">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
