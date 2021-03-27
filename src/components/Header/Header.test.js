import React from 'react';
import { render } from 'setupTests';
import { Header } from 'components';

describe('[Components] - <Header />', () => {
  it('should render Header without breaking', () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId('msh--header');
    expect(element).toBeInTheDocument();
  });
});
