import { createSelector } from 'reselect';

const selectStudentsList = state => state.get('studentsList');

const makeSelectStudentsList = () =>
  createSelector(selectStudentsList, subState => subState.toJS());

export default makeSelectStudentsList;
export { selectStudentsList };
