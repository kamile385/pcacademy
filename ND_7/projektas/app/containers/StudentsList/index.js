import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import Student from './Student';
import data from '../../MOCK_DATA_students.json';
import makeSelectStudentsList from './selectors';
import { setStudents } from './actions';
import reducer from './reducer';

export class StudentsList extends React.Component {
  /* const p = data.length;
  console.log(p); */
  componentDidMount() {
    this.props.setStudents(data);
    console.log(this.props);
  }

  render() {
    const { students } = this.props;
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
        {/* {students.length > 0 &&
          students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        {students.length === 0 && <h3>No data</h3>} */}
        {data.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </React.Fragment>
    );
  }
}

StudentsList.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectStudentsList();

function mapDispatchToProps(dispatch) {
  return {
    setStudents: students => dispatch(setStudents(students)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'studentsList', reducer });

export default compose(
  withConnect,
  withReducer,
)(StudentsList);
