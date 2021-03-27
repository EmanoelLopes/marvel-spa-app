import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Home } from 'Pages';

describe('[Pages] - <Home />', () => {
  it('should render Home', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    expect(screen.getByTestId('msh--page-home')).toBeInTheDocument();
  });
});
