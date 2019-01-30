import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import makeSelectStudentsList from './selectors';
import {
  getStudents,
  createStudent,
  deleteStudent,
  editStudent,
} from './actions';
import NewStudentForm from '../../components/Forms/newStudent';
import Student from './Student';

export class StudentsList extends React.Component {
  /* const p = data.length;
  console.log(p); */
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getStudents();
  }

  submit = data => {
    this.props.createStudent(data);
  };

  submitEdit = id => {
    this.props.editStudent(id);
  };

  delete = id => {
    this.props.deleteStudent(id);
  };

  render() {
    const { students } = this.props;
    return (
      <div>
        <h3>Students List</h3>
        {/* <Link to="students/add"> */}
        <button
          className="btn btn-success"
          type="submit"
          onClick={this.handleShow}
          style={{
            cursor: 'pointer',
            float: 'right',
            color: 'white',
            marginRight: '1rem',
          }}
        >
          <i
            className="fas fa-plus"
            style={{
              fontSize: '20px',
            }}
          />
        </button>
        <br />
        <br />
        {/* </Link> */}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <NewStudentForm onSubmit={this.submit} />
          </Modal.Body>
        </Modal>

        <React.Fragment>
          {students.length > 0 &&
            students.map(item => <Student key={item._id} item={item} />)}
          {students.length === 0 && <h3>No data</h3>}
        </React.Fragment>
      </div>
    );
  }
}

StudentsList.propTypes = {
  students: PropTypes.array,
  getStudents: PropTypes.func,
  createStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
};

const mapStateToProps = makeSelectStudentsList();

function mapDispatchToProps(dispatch) {
  return {
    getStudents: () => dispatch(getStudents()),
    createStudent: data => dispatch(createStudent(data)),
    deleteStudent: id => dispatch(deleteStudent(id)),
    editStudent: id => dispatch(editStudent(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'studentsList', reducer });
const withSaga = injectSaga({ key: 'studentsList', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(StudentsList);
