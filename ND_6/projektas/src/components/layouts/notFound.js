import React from 'react';
import Home from '../home';
import '../styles/404.css';

const notFound = () => (
  <Home>
    <div className="container">
      <h1>404</h1>
      <p>Uh oh! Are you sure you wanted to go here?</p>
    </div>
  </Home>
);

export default notFound;