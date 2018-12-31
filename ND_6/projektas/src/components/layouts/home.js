import React from 'react';
import "../styles/home.css";

export default function Home() {
  return (
    <div className="row">
    <div className="col-sm">
        <div className="card border-primary mb-3">
        <a href="/students">
            <div className="card-body"><span className="glyphicon glyphicon-user"></span></div>
            <h5 className="card-title">Students</h5>
        </a>
        </div>
    </div>
    <div className="col-sm">
        <div className="card border-secondary mb-3">
        <a href="/programs">
            <div className="card-body"><span className="glyphicon glyphicon-list-alt"></span></div>
            <h5 className="card-title">Programs</h5>
        </a>
        </div>
    </div>
    <div className="col-sm">
        <div className="card border-success mb-3">
        <a href="/groups">
            <div className="card-body"><span className="glyphicon glyphicon-th"></span></div>
            <h5 className="card-title">Groups</h5>
        </a>
        </div>
    </div>    
    <div className="col-sm">
        <div className="card border-danger mb-3">
        <a href="/attendances">
            <div className="card-body"><span className="glyphicon glyphicon-ok-circle"></span></div>
            <h5 className="card-title">Attendances</h5>
        </a>
        </div>
    </div>
    <div className="col-sm">
        <div className="card border-warning mb-3">
        <a href="/payments">
            <div className="card-body"><span className="glyphicon glyphicon-ok-circle"></span></div>
            <h5 className="card-title">Payments</h5>
        </a>
        </div>
    </div>
    </div>
  )
}
