import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-inverse navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#000024',
        marginBottom: 0,
        borderRadius: 0,
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Student management system
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav navbar-nav navbar-right" to="/login">
                <span className="glyphicon glyphicon-log-in" /> Sign In
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/students">
                  Students
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/programs">
                  Programs
                </Link>
                <Link className="dropdown-item" to="/groups">
                  Groups
                </Link>
                <Link className="dropdown-item" to="/attendances">
                  Attendance
                </Link>
                <Link className="dropdown-item" to="/payments">
                  Payments
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
