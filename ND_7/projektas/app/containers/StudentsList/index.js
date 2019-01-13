import React from 'react';
import Student from './Student';
import data from '../../MOCK_DATA_students.json';

export default function Students() {
  return (
    <React.Fragment>
      <h1 className="display-4 mb-2">Students List</h1>
      {data.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </React.Fragment>
  );
}
