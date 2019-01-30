import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Style from './style.css';

function NewAttendance(props) {
  const { handleSubmit } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Date</label>
            <br />
            <Field
              name="date"
              component="input"
              type="date"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <br />
            <Field
              name="status"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="remark">Remark</label>
            <br />
            <Field
              name="remark"
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

NewAttendance.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'newAttendance',
})(NewAttendance);
