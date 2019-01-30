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

import makeSelectPaymentsList from './selectors';
import {
  getPayments,
  createPayment,
  deletePayment,
  editPayment,
} from './actions';
import NewPaymentForm from '../../components/Forms/newPayment';

export class PaymentsList extends React.Component {
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
    this.props.getPayments();
  }

  submit = data => {
    this.props.createPayment(data);
  };

  submitEdit = id => {
    this.props.editPayment(id);
  };

  delete = id => {
    this.props.deletePayment(id);
  };

  render() {
    const { payments } = this.props;
    return (
      <div>
        <h3>Payments</h3>

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
            <NewPaymentForm onSubmit={this.submit} />
          </Modal.Body>
        </Modal>

        <Table responsive hover>
          <thead>
            <tr>
              <th>MONTH</th>
              <th>AMOUNT</th>
              <th>STATE FINANCING</th>
              <th>PRAISE</th>
              <th>NOT FIRST YEAR</th>
              <th>SECOND PROGRAM</th>
              <th>STUDENT</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {payments.map(item => (
              <tr key={item._id}>
                <td>{item.month}</td>
                <td>{item.amount}</td>
                <td>{item.state_financing}</td>
                <td>{item.praise}</td>
                <td>{item.not_first_year}</td>
                <td>{item.second_program}</td>
                <td>{item.student.name}</td>
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
                    <Link to={`payment/${item.id}`}>
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

PaymentsList.propTypes = {
  getPayments: PropTypes.func,
  payments: PropTypes.array,
  createPayment: PropTypes.func,
  deletePayment: PropTypes.func.isRequired,
  editPayment: PropTypes.func,
};

const mapStateToProps = makeSelectPaymentsList();

function mapDispatchToProps(dispatch) {
  return {
    getPayments: () => dispatch(getPayments()),
    createPayment: data => dispatch(createPayment(data)),
    deletePayment: id => dispatch(deletePayment(id)),
    editPayment: id => dispatch(editPayment(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'paymentsList', reducer });
const withSaga = injectSaga({ key: 'paymentsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PaymentsList);
