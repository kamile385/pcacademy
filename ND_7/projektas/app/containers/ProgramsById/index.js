import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import data from '../../MOCK_DATA_programs.json';

export default function Programs({ match }) {
  const programId = match.params.id;

  const filteredData = data.filter(d => JSON.stringify(d.id) === programId);

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
        <div key={item.id}>
          <Link to={`/programs/${item.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <Link to="/programs">
            <button type="button">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
Programs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
