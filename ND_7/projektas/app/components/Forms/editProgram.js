import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Style from './style.css';

function EditProgram(props) {
  const { handleSubmit } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <Field
              name="name"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="group_grade">Group grade</label>
            <br />
            <Field
              name="group_grade"
              component="input"
              type="text"
              className={Style.redux_form_field}
              // default={this.props}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <Field
              name="description"
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

EditProgram.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'editProgram',
})(EditProgram);
