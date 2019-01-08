import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar';
import SignupPage from 'containers/SignupPage/Loadable';
// import ListPage from 'containers/ListPage';
import LoginPage from 'containers/LoginPage/Loadable';
import AttendancesList from 'containers/AttendancesList/Loadable';
import AttendancesById from 'containers/AttendancesById/Loadable';

import GroupsList from 'containers/GroupsList/Loadable';
import GroupsById from 'containers/GroupsById/Loadable';

import StudentsList from 'containers/StudentsList/Loadable';
import StudentsById from 'containers/StudentsById/Loadable';

import PaymentsList from 'containers/PaymentsList/Loadable';
import PaymentsById from 'containers/PaymentsById/Loadable';

import ProgramsList from 'containers/ProgramsList/Loadable';
import ProgramsById from 'containers/ProgramsById/Loadable';

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
