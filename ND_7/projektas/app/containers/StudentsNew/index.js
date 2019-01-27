// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// import TextInputGroup from './TextInputGroup';
// import makeSelectStudentsNew from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import { getStudents, createStudent } from './actions';
// import StudentForm from '../../components/Forms/newStudent';

// export class StudentsNew extends React.Component {
//   componentDidMount() {
//     console.log(this.props);
//     this.props.getStudents();
//   }

//   submit = data => {
//     this.props.createStudent(data);
//     this.props.history.push('/students');
//   };

//   // state = {
//   //   student_name_surname: '',
//   //   parent_name_surname: '',
//   //   address: '',
//   //   telephone: '',
//   //   email: '',
//   //   group: '',
//   //   identification_number: '',
//   //   errors: {},
//   // };

//   // onSubmit = e => {
//   //   e.preventDefault();

//   //   const {
//   //     student_name_surname,
//   //     parent_name_surname,
//   //     address,
//   //     telephone,
//   //     email,
//   //     group,
//   //     identification_number,
//   //   } = this.state;

//   //   // Check For Errors
//   //   if (student_name_surname === '') {
//   //     this.setState({
//   //       errors: {
//   //         student_name_surname: 'Student name and surname is required',
//   //       },
//   //     });
//   //     return;
//   //   }

//   //   if (parent_name_surname === '') {
//   //     this.setState({
//   //       errors: { parent_name_surname: 'Parent name and surname is required' },
//   //     });
//   //     return;
//   //   }

//   //   if (address === '') {
//   //     this.setState({ errors: { address: 'Address is required' } });
//   //     return;
//   //   }

//   //   if (telephone === '') {
//   //     this.setState({ errors: { telephone: 'Telephone is required' } });
//   //     return;
//   //   }

//   //   if (email === '') {
//   //     this.setState({ errors: { email: 'Email is required' } });
//   //     return;
//   //   }

//   //   if (group === '') {
//   //     this.setState({ errors: { group: 'Group is required' } });
//   //     return;
//   //   }

//   //   if (identification_number === '') {
//   //     this.setState({
//   //       errors: { identification_number: 'Identification no is required' },
//   //     });
//   //     return;
//   //   }

//   //   const newStudent = {
//   //     student_name_surname,
//   //     parent_name_surname,
//   //     address,
//   //     telephone,
//   //     email,
//   //     group,
//   //     identification_number,
//   //   };

//   //   // Clear State
//   //   this.setState({
//   //     student_name_surname: '',
//   //     parent_name_surname: '',
//   //     address: '',
//   //     telephone: '',
//   //     email: '',
//   //     group: '',
//   //     identification_number: '',
//   //     errors: {},
//   //   });

//   //   this.props.history.push('/students');
//   // };

//   // onChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { students } = this.props;
//     return (
//       <div>
//         <StudentForm onSubmit={this.submit} />
//       </div>
//     );
//     // const {
//     //   student_name_surname,
//     //   parent_name_surname,
//     //   address,
//     //   telephone,
//     //   email,
//     //   group,
//     //   identification_number,
//     //   errors,
//     // } = this.state;
//     // return (
//     //   <div className="card mb-3">
//     //     <div className="card-header">Add Student</div>
//     //     <div className="card-body">
//     //       <form onSubmit={this.onSubmit}>
//     //         <TextInputGroup
//     //           label="Student full name"
//     //           name="student_name_surname"
//     //           placeholder="Enter student full name"
//     //           value={student_name_surname}
//     //           onChange={this.onChange}
//     //           error={errors.student_name_surname}
//     //         />
//     //         <TextInputGroup
//     //           label="Parent full name"
//     //           name="parent_name_surname"
//     //           placeholder="Enter parent full name"
//     //           value={parent_name_surname}
//     //           onChange={this.onChange}
//     //           error={errors.parent_name_surname}
//     //         />
//     //         <TextInputGroup
//     //           label="Address"
//     //           name="address"
//     //           placeholder="Enter address"
//     //           value={address}
//     //           onChange={this.onChange}
//     //           error={errors.address}
//     //         />
//     //         <TextInputGroup
//     //           label="Telephone"
//     //           name="telephone"
//     //           placeholder="Enter phone number"
//     //           value={telephone}
//     //           onChange={this.onChange}
//     //           error={errors.telephone}
//     //         />
//     //         <TextInputGroup
//     //           label="Email"
//     //           name="email"
//     //           type="email"
//     //           placeholder="Enter email"
//     //           value={email}
//     //           onChange={this.onChange}
//     //           error={errors.email}
//     //         />
//     //         <TextInputGroup
//     //           label="Group"
//     //           name="group"
//     //           placeholder="Enter group"
//     //           value={group}
//     //           onChange={this.onChange}
//     //           error={errors.group}
//     //         />
//     //         <TextInputGroup
//     //           label="Identification number"
//     //           name="identification_number"
//     //           placeholder="Enter identification no"
//     //           value={identification_number}
//     //           onChange={this.onChange}
//     //           error={errors.identification_number}
//     //         />
//     //         <input
//     //           type="submit"
//     //           value="Add Student"
//     //           className="btn btn-dark btn-block"
//     //         />
//     //       </form>
//     //     </div>
//     //   </div>
//     // );
//   }
// }

// StudentsNew.propTypes = {
//   getStudents: PropTypes.func,
//   students: PropTypes.array,
//   createStudent: PropTypes.func,
//   history: PropTypes.object,
// };

// const mapStateToProps = makeSelectStudentsNew();

// function mapDispatchToProps(dispatch) {
//   return {
//     getStudents: () => dispatch(getStudents()),
//     createStudent: data => dispatch(createStudent(data)),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// const withReducer = injectReducer({ key: 'studentsNew', reducer });
// const withSaga = injectSaga({ key: 'studentsNew', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(StudentsNew);
