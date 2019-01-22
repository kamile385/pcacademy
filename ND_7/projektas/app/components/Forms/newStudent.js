import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import TextInputGroup from '../../containers/StudentsNew/TextInputGroup';

function NewStudent(props) {
  const { handleSubmit } = props;
  return (
    <div className="card mb-3">
      <div className="card-header">Add Student</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* <TextInputGroup
            label="Student full name"
            name="student_name_surname"
            placeholder="Enter student full name"
            value={student_name_surname}
            onChange={this.onChange}
            error={errors.student_name_surname}
          /> */}
          <div>
            <label htmlFor="name">Name:</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <Field name="age" component="input" type="number" />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: 'newStudent',
})(NewStudent);
