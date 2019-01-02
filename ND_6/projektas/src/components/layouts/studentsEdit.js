import React, { Component } from "react";
import NewStudent from './newStudent';
import "../styles/list.css";

export default class StudentsEdit extends Component {
  render() {
    return (
      <div>
          <NewStudent/>
      </div>
    );
  }
}