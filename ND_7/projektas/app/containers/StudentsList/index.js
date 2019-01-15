import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student';
import data from '../../MOCK_DATA_students.json';

export default function Students() {
  const p = data.length;
  console.log(p);
  return (
    <React.Fragment>
      <h1 className="display-4 mb-2">
        Students List
        <Link to="students/add">
          <i
            className="fas fa-plus"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem',
            }}
          />
        </Link>
      </h1>
      {data.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </React.Fragment>
  );
}
