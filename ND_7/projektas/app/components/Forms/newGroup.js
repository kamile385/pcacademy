import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Style from './style.css';

function NewGroup(props) {
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
            />
          </div>
          <div>
            <label htmlFor="day_of_week">Day of the week</label>
            <br />
            <Field
              name="day_of_week"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="time_from">Time from</label>
            <br />
            <Field
              name="time_from"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="time_to">Time to</label>
            <br />
            <Field
              name="time_to"
              component="input"
              type="text"
              className={Style.redux_form_field}
            />
          </div>
          <div>
            <label htmlFor="program">Program</label>
            <br />
            <Field
              name="program"
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

NewGroup.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'newGroup',
})(NewGroup);
