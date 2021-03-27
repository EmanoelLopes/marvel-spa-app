import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { NotMatch } from 'Pages';

describe('[Pages] - <NotMatch />', () => {
  it('should render NotMatch', () => {
    const history = createMemoryHistory();
    const route = '/ssasas';
    history.push(route);

    render(
      <Router history={history}>
        <NotMatch />
      </Router>
    );
    expect(screen.getByText('Página não encontrada :/')).toBeInTheDocument();
  });
});
