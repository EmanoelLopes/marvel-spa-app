import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { HeroContainer } from 'components';
import { Hero } from 'Pages';
import mockData from './mockData.json';

describe('[Component] - <Hero />', () => {
  it('should render Hero', () => {
    const history = createMemoryHistory();
    const route = '/hero/1';
    const props = {
      data: { ...mockData },
    };

    history.push(route);

    render(
      <Router history={history}>
        <Hero>
          <HeroContainer {...props} />
        </Hero>
      </Router>
    );
    expect(screen.getByTestId('msh--hero-container')).toBeInTheDocument();
  });
});
