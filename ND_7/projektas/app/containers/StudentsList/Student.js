import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Student extends Component {
  state = {
    showStudentInfo: false,
  };

  onDeleteClick = id => {};

  render() {
    const {
      id,
      student_name_surname,
      parent_name_surname,
      address,
      telephone,
      email,
      group,
      identification_number,
    } = this.props.student;
    const { showStudentInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {student_name_surname}{' '}
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
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`students/edit/${id}`}>
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
              PARENT NAME SURNAME: {parent_name_surname}
            </li>
            <li className="list-group-item">ADDRESS: {address}</li>
            <li className="list-group-item">TELEPHONE: {telephone}</li>
            <li className="list-group-item">EMAIL: {email}</li>
            <li className="list-group-item">GROUP: {group}</li>
            <li className="list-group-item">
              IDENTIFICATION NO: {identification_number}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Student.propTypes = {
  student: PropTypes.object.isRequired,
};
