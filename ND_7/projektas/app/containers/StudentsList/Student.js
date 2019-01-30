import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Student extends React.Component {
  state = {
    showStudentInfo: false,
  };

  // delete = _id => {
  //   this.props.deleteStudent(_id);
  // };

  render() {
    const student = this.props.item;
    const { showStudentInfo } = this.state;

    // const {
    //   _id,
    //   student_name_surname,
    //   parent_name_surname,
    //   address,
    //   telephone,
    //   email,
    //   group,
    //   identification_number,
    // } = student;

    // console.log(student);
    return (
      <div className="card card-body mb-3">
        <h4>
          {student.student_name_surname}{' '}
          <i
            onClick={() =>
              this.setState({
                showStudentInfo: !this.state.showStudentInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-trash"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            // onClick={() => {
            //   this.delete(_id);
            // }}
          />
          <Link to={`students/edit/${student._id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem',
              }}
            />
          </Link>
        </h4>
        {showStudentInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              PARENT FULL NAME: {student.parent_name_surname}
            </li>
            <li className="list-group-item">ADDRESS: {student.address}</li>
            <li className="list-group-item">TELEPHONE: {student.telephone}</li>
            <li className="list-group-item">EMAIL: {student.email}</li>
            <li className="list-group-item">GROUP: {student.group}</li>
            <li className="list-group-item">
              IDENTIFICATION NO: {student.identification_number}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
