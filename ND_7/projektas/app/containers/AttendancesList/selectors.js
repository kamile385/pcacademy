import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAttendancesList = state =>
  state.get('attendancesList', initialState);

const makeSelectAttendancesList = () =>
  createSelector(selectAttendancesList, substate => substate.toJS());

export default makeSelectAttendancesList;
export { selectAttendancesList };
