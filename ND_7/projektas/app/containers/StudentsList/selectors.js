import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStudentsList = state => state.get('studentsList', initialState);

const makeSelectStudentsList = () =>
  createSelector(selectStudentsList, subState => subState.toJS());

export default makeSelectStudentsList;
export { selectStudentsList };
