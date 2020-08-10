import React from 'react';
import Routes from 'routes';
import { GlobalStyles } from 'styles';

function Root() {
  return (
    <div className="ROOT" data-test-id="RootAPP">
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default Root;
