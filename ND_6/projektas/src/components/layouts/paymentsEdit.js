import React, { Component } from "react";
import NewPayment from './newPayment';
import "../styles/list.css";

export default class PaymentsEdit extends Component {
  render() {
    return (
      <div>
          <NewPayment/>
      </div>
    );
  }
}