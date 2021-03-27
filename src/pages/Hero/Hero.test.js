import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Hero } from 'Pages';

describe('[Pages] - <Hero />', () => {
  it('should render Hero', () => {
    const history = createMemoryHistory();
    const route = '/hero/1';
    history.push(route);

    render(
      <Router history={history}>
        <Hero />
      </Router>
    );
    expect(screen.getByTestId('msh--page-hero')).toBeInTheDocument();
  });
});
