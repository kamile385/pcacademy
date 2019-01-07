import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import data from '../../MOCK_DATA_payments.json';

export default function Payments({ match }) {
  const paymentId = match.params.id;

  const filteredData = data.filter(d => d.id == paymentId);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>MONTH</th>
            <th>AMOUNT</th>
            <th>STATE FINANCING</th>
            <th>PRAISE</th>
            <th>NOT FIRST YEAR</th>
            <th>SECOND PROGRAM</th>
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
          <Link to={`/payments/${item.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <Link to="/payments">
            <button type="button">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
