import React from 'react';
import { render, screen, waitFor } from 'setupTests';
import userEvent from '@testing-library/user-event';
import { Toggle } from 'components';

describe('[Components] - <Toggle />', () => {
  const props = {
    toggle: jest.fn(),
  };

  it('should render Toggle without breaking', () => {
    render(<Toggle {...props} />);
    expect(screen.getByTestId('msh--toggle')).toBeInTheDocument();
  });

  it('should call mocked onClick function', () => {
    const { getByTestId } = render(<Toggle {...props} />);
    userEvent.click(getByTestId('msh--toggle-label'));

    waitFor(async () => await expect(props.toggle).toHaveBeenCalledTimes(1));
  });
});
