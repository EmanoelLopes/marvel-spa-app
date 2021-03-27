import React from 'react';
import { render, screen, waitFor } from 'setupTests';
import userEvent from '@testing-library/user-event';
import { SearchBar } from 'components';

describe('[Components] - <SearchBar />', () => {
  const props = {
    onChange: jest.fn(),
    onClick: jest.fn(),
  };

  it('should render SearchBar without breaking', () => {
    render(<SearchBar {...props} />);
    expect(screen.getByTestId('msh--searchbar')).toBeInTheDocument();
  });

  it('should call mocked onClick function', () => {
    const { getByTestId } = render(<SearchBar {...props} />);
    userEvent.click(getByTestId('msh--searchbar-button'));

    waitFor(async () => await expect(props.onClick).toHaveBeenCalledTimes(1));
  });

  it('should call mocked onChange function', () => {
    const { getByTestId } = render(<SearchBar {...props} />);
    userEvent.type(getByTestId('msh--searchbar-input'), 'Avengers');

    waitFor(async () => await expect(props.onChange).toHaveBeenCalledTimes(1));
    waitFor(async () => await expect(props.onChange).toHaveValue('Avengers'));
  });
});
