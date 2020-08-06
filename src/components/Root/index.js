import React, { Fragment } from 'react';
import Routes from 'routes';
import { GlobalStyles } from 'styles';

function Root() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  );
}

export default Root;
