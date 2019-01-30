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

import makeSelectGroupsList from './selectors';
import { getGroups, createGroup, deleteGroup, editGroup } from './actions';
import NewGroupForm from '../../components/Forms/newGroup';
// import EditGroupForm from '../../components/Forms/editGroup';

export class GroupsList extends React.Component {
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
    this.props.getGroups();
  }

  submit = data => {
    this.props.createGroup(data);
  };

  submitEdit = id => {
    this.props.editGroup(id);
  };

  delete = id => {
    this.props.deleteGroup(id);
  };

  render() {
    const { groups } = this.props;
    return (
      <div>
        <h3>Groups</h3>

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
            <NewGroupForm onSubmit={this.submit} />
          </Modal.Body>
        </Modal>

        <Table responsive hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>GROUP GRADE</th>
              <th>DAY OF WEEK</th>
              <th>TIME FROM</th>
              <th>TIME TO</th>
              <th>PROGRAM</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {groups.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.group_grade}</td>
                <td>{item.day_of_week}</td>
                <td>{item.time_from}</td>
                <td>{item.time_to}</td>
                <td>{item.program.group_grade}</td>
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

                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Link to={`group/${item.id}`}>
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
        {/* <EditGroupForm onSubmit={this.submitEdit(item.id)} /> */}
      </div>
    );
  }
}

GroupsList.propTypes = {
  getGroups: PropTypes.func,
  groups: PropTypes.array,
  createGroup: PropTypes.func,
  deleteGroup: PropTypes.func.isRequired,
  editGroup: PropTypes.func,
};

const mapStateToProps = makeSelectGroupsList();

function mapDispatchToProps(dispatch) {
  return {
    getGroups: () => dispatch(getGroups()),
    createGroup: data => dispatch(createGroup(data)),
    deleteGroup: id => dispatch(deleteGroup(id)),
    editGroup: id => dispatch(editGroup(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'groupsList', reducer });
const withSaga = injectSaga({ key: 'groupsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupsList);
