import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/Loadable';
import NavBar from '../NavBar';
import HomePage from '../HomePage/Loadable';
import SignupPage from '../SignUpPage/Loadable';

import LoginPage from '../LoginPage/Loadable';
import AttendancesList from '../AttendancesList/Loadable';
import AttendancesById from '../AttendancesById/Loadable';

import GroupsList from '../GroupsList/Loadable';
// import GroupsById from '../GroupsById/Loadable';

import StudentsList from '../StudentsList/Loadable';
// import StudentsById from '../StudentsById/Loadable';
// import StudentsNew from '../StudentsNew/Loadable';

import PaymentsList from '../PaymentsList/Loadable';
import PaymentsById from '../PaymentsById/Loadable';

import ProgramsList from '../ProgramsList/Loadable';
// import ProgramsById from '../ProgramsById/Loadable';

// import EditProgram from '../../components/Forms/editProgram';
import Footer from '../Footer';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="jumbotron">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />

          <Route exact path="/attendances" component={AttendancesList} />
          <Route exact path="/attendances/:id" component={AttendancesById} />

          <Route exact path="/groups" component={GroupsList} />
          <Route exact path="/groups/:id" component={GroupsList} />

          <Route exact path="/students" component={StudentsList} />
          {/* <Route exact path="/students/:id" component={StudentsById} /> */}
          <Route exact path="/students/:id" component={StudentsList} />

          <Route exact path="/payments" component={PaymentsList} />
          <Route exact path="/payments/:id" component={PaymentsById} />

          <Route exact path="/programs" component={ProgramsList} />
          <Route exact path="/program/:id" component={ProgramsList} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
      <Footer />
    </div>
  );
}
