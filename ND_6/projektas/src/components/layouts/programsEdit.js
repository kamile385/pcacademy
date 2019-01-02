import React, { Component } from "react";
import NewProgram from './newProgram';
import "../styles/list.css";

export default class ProgramsEdit extends Component {
  render() {
    return (
      <div>
          <NewProgram/>
      </div>
    );
  }
}