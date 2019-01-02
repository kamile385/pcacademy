import React from "react";
import { Table } from "react-bootstrap";
import data from '../../MOCK_DATA_payments.json';

export default function Payments({ match }) {
  let payment_id = match.params.id;

  let filteredData = data.filter(d => {
    return d.id == payment_id;
  });

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
        <a className="btn btn-primary" href={`/payments/${item.id}/edit`} role="button">Edit</a>
        <a className="btn btn-primary" href="/payments" role="button">Delete</a>
        </div>
      ))}
    </div>
  );
}