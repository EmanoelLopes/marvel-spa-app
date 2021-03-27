import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert } from 'components';

describe('[Components] - <Alert />', () => {
  const props = {
    message: 'Message default.',
    id: '1',
  };

  it('should render Alert without breaking', () => {
    render(<Alert {...props} />);
    expect(screen.getByTestId('msh--alert-1')).toBeInTheDocument();
  });
});
