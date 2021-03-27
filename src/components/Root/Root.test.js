import React from 'react';
import { render } from 'setupTests';
import { Root } from 'components';

describe('[Components] - <Root />', () => {
  it('should render Root without breaking', () => {
    const { getByTestId } = render(<Root />);

    expect(getByTestId('msh--root-app')).toBeInTheDocument();
  });
});
