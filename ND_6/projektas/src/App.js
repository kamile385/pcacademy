import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/layouts/navbar';
import Login from './components/layouts/login';
import Signup from './components/layouts/signup';
import Home from './components/layouts/home';

import ProgramsList from './components/layouts/programsList';
import ProgramsById from './components/layouts/programsById';
import ProgramsEdit from './components/layouts/programsEdit';

import AttendancesList from './components/layouts/attendancesList';
import AttendancesById from './components/layouts/attendancesById';
import AttendancesEdit from './components/layouts/attendancesEdit';

import PaymentsList from './components/layouts/paymentsList';
import PaymentsById from './components/layouts/paymentsById';
import PaymentsEdit from './components/layouts/paymentsEdit';

import StudentsList from './components/layouts/studentsList';
import StudentsById from './components/layouts/studentsById';
import StudentsEdit from './components/layouts/studentsEdit';

import GroupsList from './components/layouts/groupsList';
import GroupsById from './components/layouts/groupsById';
import GroupsEdit from './components/layouts/groupsEdit';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        <Route path="/" exact component={ Home } />
        
        <Route path="/login" exact component={ Login } />
        <Route path="/signup" exact component={ Signup }/>

        <Route path="/programs" exact component={ ProgramsList }/>
        <Route path="/programs/:id" exact component={ ProgramsById }/>
        <Route path="/programs/:id/edit" exact component={ ProgramsEdit }/>
        
        <Route path="/attendances" exact component={ AttendancesList }/>
        <Route path="/attendances/:id" exact component={ AttendancesById }/>
        <Route path="/attendances/:id/edit" exact component={ AttendancesEdit }/>

        <Route path="/payments" exact component={ PaymentsList }/>
        <Route path="/payments/:id" exact component={ PaymentsById }/>
        <Route path="/payments/:id/edit" exact component={ PaymentsEdit }/>

        <Route path="/students" exact component={ StudentsList }/>
        <Route path="/students/:id" exact component={ StudentsById }/>
        <Route path="/students/:id/edit" exact component={ StudentsEdit }/>

        <Route path="/groups" exact component={ GroupsList }/>
        <Route path="/groups/:id" exact component={ GroupsById }/>
        <Route path="/groups/:id/edit" exact component={ GroupsEdit }/>
      </div>
    );
  }
}

export default App;
