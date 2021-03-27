import React from 'react';
import { render, screen } from '@testing-library/react';
import { Filters } from 'components';

describe('[Components] - <Filters />', () => {
  const props = {
    amount: 20,
    onClick: () => {},
    selectFavorites: () => {},
    onlyFavorites: false,
  };

  it('should render Filters without breaking', () => {
    render(<Filters {...props} />);
    expect(screen.getByTestId('msh--filters')).toBeInTheDocument();
  });

  it('should show Heart Full Icon if onlyFavorits props is truthy', () => {
    render(<Filters {...props} onlyFavorites={true} />);
    expect(screen.getByTestId('msh--icon-heart-full')).toBeInTheDocument();
  });
});
