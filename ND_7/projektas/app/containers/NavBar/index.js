import React from 'react';
export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: '#000024' }}
    >
      <a className="navbar-brand" href="/">
        Student management system
      </a>
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/login">
              Login
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Sign up
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/students">
                Students
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/programs">
                Programs
              </a>
              <a className="dropdown-item" href="/groups">
                Groups
              </a>
              <a className="dropdown-item" href="/attendances">
                Attendance
              </a>
              <a className="dropdown-item" href="/payments">
                Payments
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
