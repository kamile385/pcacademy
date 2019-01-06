import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar';
// import Try from 'containers/NavBar/try.js';
import SignupPage from 'containers/SignupPage/Loadable';
// import ListPage from 'containers/ListPage';
import LoginPage from 'containers/LoginPage/Loadable';
import AttendancesList from 'containers/AttendancesList';
import AttendancesById from 'containers/AttendancesById';

import GroupsList from 'containers/GroupsList';
import GroupsById from 'containers/GroupsById';

import StudentsList from 'containers/StudentsList';
import StudentsById from 'containers/StudentsById';

import PaymentsList from 'containers/PaymentsList';
import PaymentsById from 'containers/PaymentsById';

import ProgramsList from 'containers/ProgramsList';
import ProgramsById from 'containers/ProgramsById';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        {/* <Route exact path="/list" component={ListPage} /> */}
        <Route exact path="/attendances" component={AttendancesList} />
        <Route exact path="/attendances/:id" component={AttendancesById} />

        <Route exact path="/groups" component={GroupsList} />
        <Route exact path="/groups/:id" component={GroupsById} />

        <Route exact path="/students" component={StudentsList} />
        <Route exact path="/students/:id" component={StudentsById} />

        <Route exact path="/payments" component={PaymentsList} />
        <Route exact path="/payments/:id" component={PaymentsById} />

        <Route exact path="/programs" component={ProgramsList} />
        <Route exact path="/programs/:id" component={ProgramsById} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
