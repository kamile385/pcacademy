import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import data from '../../MOCK_DATA_attendances.json';

export default function Attendances({ match }) {
  const attendanceId = match.params.id;

  const filteredData = data.filter(d => JSON.stringify(d.id) === attendanceId);

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
          <Link to={`/attendances/${item.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <Link to="/attendances">
            <button type="button">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
Attendances.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
