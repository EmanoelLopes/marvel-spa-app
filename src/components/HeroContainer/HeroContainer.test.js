import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { HeroContainer } from 'components';
import { Hero } from 'pages';

describe('[Component] - <Hero />', () => {
  const history = createMemoryHistory();
  const route = '/hero/1';

  it('should render Hero', () => {
    const props = {
      data: {},
    };

    history.push(route);

    render(
      <Router history={history}>
        <Hero>
          <HeroContainer {...props.data} />
        </Hero>
      </Router>
    );
    expect(screen.getByTestId('msh--hero-container')).toBeInTheDocument();
  });
});
