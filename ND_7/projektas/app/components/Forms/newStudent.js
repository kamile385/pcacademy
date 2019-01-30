import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Style from './style.css';

function NewStudent(props) {
  const { handleSubmit } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Created at</label>
            <br />
            <Field
              name="date"
              component="input"
              type="date"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="student_name_surname">Student name surname</label>
            <br />
            <Field
              name="student_name_surname"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="parent_name_surname">Parent name surname</label>
            <br />
            <Field
              name="parent_name_surname"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <Field
              name="address"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="telephone">Telephone</label>
            <br />
            <Field
              name="telephone"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <Field
              name="email"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="group">Group</label>
            <br />
            <Field
              name="group"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="identification_number">
              Personal identification number
            </label>
            <br />
            <Field
              name="identification_number"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="teacher">Teacher</label>
            <br />
            <Field
              name="teacher"
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

NewStudent.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'newStudent',
})(NewStudent);
