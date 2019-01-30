import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Style from './style.css';

function NewPayment(props) {
  const { handleSubmit } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="month">Month</label>
            <br />
            <Field
              name="month"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <br />
            <Field
              name="amount"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="state_financing">State financing</label>
            <br />
            <Field
              name="state_financing"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="praise">Praise</label>
            <br />
            <Field
              name="praise"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="not_first_year">Not first year</label>
            <br />
            <Field
              name="not_first_year"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="second_program">Second program</label>
            <br />
            <Field
              name="second_program"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="student">Student</label>
            <br />
            <Field
              name="student"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <br />
          <button className="btn btn-block btn-sm btn btn-dark" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

NewPayment.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'newPayment',
})(NewPayment);
