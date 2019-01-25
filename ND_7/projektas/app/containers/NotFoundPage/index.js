import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <h2>
        <center>
          <span className="glyphicon glyphicon-search" />
          <br />
          404
          <br />
          <FormattedMessage {...messages.header} />
          <br />
          <br />
          <Link to="/" style={{ textDecoration: 'none', color: 'red' }}>
            <span className="glyphicon glyphicon-home" />
          </Link>
        </center>
      </h2>
    );
  }
}
