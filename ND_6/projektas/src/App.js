import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/layouts/navbar';
import Login from './components/layouts/login';
import Signup from './components/layouts/signup';
import Home from './components/layouts/home';

import NewProgram from './components/layouts/newProgram';
import ProgramsList from './components/layouts/programsList';
import Programs from './components/layouts/programs';

import NewAttendance from './components/layouts/newAttendance';
import AttendancesList from './components/layouts/attendancesList';

import NewPayment from './components/layouts/newPayment';
import PaymentsList from './components/layouts/paymentsList';

import NewStudent from './components/layouts/newStudent';
import StudentsList from './components/layouts/studentsList';

import NewGroup from './components/layouts/newGroup';
import GroupsList from './components/layouts/groupsList';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        <Route path="/" exact component={ Home } />
        <Route path="/login" exact component={ Login } />
        <Route path="/signup" exact component={ Signup }/>
        <Route path="/programs/new" exact component={ NewProgram }/>
        <Route path="/programs" exact component={ ProgramsList }/>
        <Route path="/programs/:id" exact component={ Programs }/>
        <Route path="/attendances/new" exact component={ NewAttendance }/>
        <Route path="/attendances" exact component={ AttendancesList }/>
        <Route path="/payments/new" exact component={ NewPayment }/>
        <Route path="/payments" exact component={ PaymentsList }/>
        <Route path="/students/new" exact component={ NewStudent }/>
        <Route path="/students" exact component={ StudentsList }/>
        <Route path="/groups/new" exact component={ NewGroup }/>
        <Route path="/groups" exact component={ GroupsList }/>
        {/* <Route exact path='/question/:questionId' component={Question}/> */}
      </div>
    );
  }
}

export default App;
