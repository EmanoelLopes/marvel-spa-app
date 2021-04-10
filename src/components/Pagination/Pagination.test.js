import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from 'components';

describe('[Components] - <Pagination />', () => {
  const props = {
    onPageChange: jest.fn(),
  };

  it('should render Pagination without breaking', () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId('msh--pagination')).toBeInTheDocument();
  });

  it('should call function `onPageChange`', () => {
    render(<Pagination {...props} />);
    props.onPageChange();

    expect(props.onPageChange).toHaveBeenCalledTimes(1);
  });
});
