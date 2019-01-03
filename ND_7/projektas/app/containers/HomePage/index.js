/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default function HomePage() {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card border-primary mb-3">
          <a href="/students">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-user" />
            </div>
            <h5 className={Style.cardTitle}>Students</h5>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-secondary mb-3">
          <a href="/programs">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-list-alt" />
            </div>
            <h5 className={Style.cardTitle}>Programs</h5>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-success mb-3">
          <a href="/groups">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-th" />
            </div>
            <h5 className={Style.cardTitle}>Groups</h5>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-danger mb-3">
          <a href="/attendances">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-ok-circle" />
            </div>
            <h5 className={Style.cardTitle}>Attendances</h5>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card border-warning mb-3">
          <a href="/payments">
            <div className={Style.cardBody}>
              <span className="glyphicon glyphicon-credit-card" />
            </div>
            <h5 className={Style.cardTitle}>Payments</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
