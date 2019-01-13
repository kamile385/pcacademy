import React from 'react';
import List from '../../components/Lists';
import dataAttendances from '../../MOCK_DATA_attendances.json';
import dataStudents from '../../MOCK_DATA_students.json';

export default function ListPage() {
  // console.log(this.props.location.pathname);
  return (
    <div>
      <List header="Attendances">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>REMARK</th>
          </tr>
        </thead>
        <tbody>
          {dataAttendances.map(item => (
            <tr key={item.id}>
              <td>
                <a href={`/attendances/${item.id}`}>{item.id}</a>
              </td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </List>

      <List header="Students">
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
          {dataStudents.map(item => (
            <tr key={item.id}>
              <td>
                <a href={`/students/${item.id}`}>{item.id}</a>
              </td>
              <td>{item.student_name_surname}</td>
              <td>{item.parent_name_surname}</td>
              <td>{item.address}</td>
              <td>{item.telephone}</td>
              <td>{item.email}</td>
              <td>{item.group}</td>
              <td>{item.identification_number}</td>
            </tr>
          ))}
        </tbody>
      </List>
    </div>
  );
}
