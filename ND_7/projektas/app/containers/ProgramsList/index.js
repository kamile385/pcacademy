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

import makeSelectProgramsList from './selectors';

import { getPrograms, createProgram } from './actions';
import ProgramForm from '../../components/Forms/newProgram';
import Style from './style.css';
// import ProgramsNew from '../ProgramsNew';

export class ProgramsList extends React.Component {
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
    this.props.getPrograms();
  }

  submit = data => {
    this.props.createProgram(data);
  };

  render() {
    const { programs } = this.props;
    return (
      <div>
        <h3>Programs</h3>

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
            <ProgramForm onSubmit={this.submit} />
          </Modal.Body>
        </Modal>

        <Table responsive hover>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
              <th>GROUP GRADE</th>
              <th>DESCRIPTION</th>
              <th>TEACHER</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {programs.map(item => (
              <tr key={item.id}>
                {/* <td>
                  <Link to={`/programs/${item.id}`}>{item.id}</Link>
                </td> */}

                <td>{item.name}</td>
                <td>{item.group_grade}</td>
                <td>{item.description}</td>
                <td>{item.teacher.teacher_name_surname}</td>
                <td>
                  <i
                    className="fas fa-trash"
                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                    // onClick={this.onDeleteClick.bind(this, id)}
                  />
                  <Link to={`students/edit/${item.id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: 'pointer',
                        float: 'right',
                        color: 'blue',
                        marginRight: '1rem',
                      }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

ProgramsList.propTypes = {
  getPrograms: PropTypes.func,
  programs: PropTypes.array,
  createProgram: PropTypes.func,
};

const mapStateToProps = makeSelectProgramsList();

function mapDispatchToProps(dispatch) {
  return {
    getPrograms: () => dispatch(getPrograms()),
    createProgram: data => dispatch(createProgram(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'programsList', reducer });
const withSaga = injectSaga({ key: 'programsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProgramsList);
