import React, { Component } from "react";
import NewAttendance from './newAttendance';
import "../styles/list.css";

export default class AttendancesEdit extends Component {
  render() {
    return (
      <div>
          <NewAttendance/>
      </div>
    );
  }
}