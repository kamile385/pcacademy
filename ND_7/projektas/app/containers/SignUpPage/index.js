import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { signUp } from './actions';
import SignUpForm from './SignUpForm';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import saga from './saga';

export default class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = makeSelectSignUp();

// function mapDispatchToProps(dispatch) {
//   return {
//     signUp: data => dispatch(signUp(data)),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// const withReducer = injectReducer({ key: 'signUp', reducer });
// const withSaga = injectSaga({ key: 'signUp', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(SignUp);
