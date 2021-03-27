import React from 'react';
import Routes from 'routes';
import { GlobalStyles } from 'styles';

export function Root() {
  return (
    <div className="root-app" data-testid="msh--root-app">
      <GlobalStyles />
      <Routes />
    </div>
  );
}
