import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import makeSelectAttendancesList from './selectors';
import {
  getAttendances,
  createAttendance,
  deleteAttendance,
  editAttendance,
} from './actions';
import NewAttendanceForm from '../../components/Forms/newAttendance';

export class AttendancesList extends React.Component {
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
    this.props.getAttendances();
  }

  submit = data => {
    this.props.createAttendance(data);
  };

  submitEdit = id => {
    this.props.editAttendance(id);
  };

  delete = id => {
    this.props.deleteAttendance(id);
  };

  render() {
    const { attendances } = this.props;
    console.log(attendances);
    return (
      <div>
        <h3>Attendances</h3>
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <NewAttendanceForm onSubmit={this.submit} />
          </Modal.Body>
        </Modal>

        <Table responsive hover>
          <thead>
            <tr>
              <th>DATE</th>
              <th>STATUS</th>
              <th>REMARK</th>
              <th>STUDENT</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {attendances.map(item => (
              <tr key={item._id}>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.remark}</td>
                <td>{item.student.student_name_surname}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                    }}
                    onClick={() => {
                      this.delete(item.id);
                    }}
                  >
                    <i
                      className="fas fa-trash"
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Link to={`attendance/${item.id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{
                          cursor: 'pointer',
                        }}
                      />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

AttendancesList.propTypes = {
  getAttendances: PropTypes.func,
  attendances: PropTypes.array,
  createAttendance: PropTypes.func,
  deleteAttendance: PropTypes.func.isRequired,
  editAttendance: PropTypes.func,
};

const mapStateToProps = makeSelectAttendancesList();

function mapDispatchToProps(dispatch) {
  return {
    getAttendances: () => dispatch(getAttendances()),
    createAttendance: data => dispatch(createAttendance(data)),
    deleteAttendance: id => dispatch(deleteAttendance(id)),
    editAttendance: id => dispatch(editAttendance(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'attendancesList', reducer });
const withSaga = injectSaga({ key: 'attendancesList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AttendancesList);
