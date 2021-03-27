import React from 'react';
import { render, screen } from 'setupTests';
import { HeroesList } from 'components';

describe('[Components] - <HeroesList />', () => {
  const props = {
    heroes: [],
    value: '',
    onlyFavorites: false,
  };

  it('should render HeroesList without breaking', () => {
    render(<HeroesList {...props} />);
    expect(screen.getByTestId('msh--heroes-list')).toBeInTheDocument();
  });
});
