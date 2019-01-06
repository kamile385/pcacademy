import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default function HomePage() {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card border-primary mb-3">
          <Link to="/students">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-user" />
            </div>
            <h5 className={Style.cardTitle}>Students</h5>
          </Link>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-secondary mb-3">
          <Link to="/programs">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-list-alt" />
            </div>
            <h5 className={Style.cardTitle}>Programs</h5>
          </Link>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-success mb-3">
          <Link to="/groups">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-th" />
            </div>
            <h5 className={Style.cardTitle}>Groups</h5>
          </Link>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-danger mb-3">
          <Link to="/attendances">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-ok-circle" />
            </div>
            <h5 className={Style.cardTitle}>Attendances</h5>
          </Link>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-warning mb-3">
          <Link to="/payments">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-credit-card" />
            </div>
            <h5 className={Style.cardTitle}>Payments</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
