import React from 'react';
import { render } from 'setupTests';
import { Loader } from 'components';

describe('[Components] - <Loader />', () => {
  it('should render Loader without breaking', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('msh--loader')).toBeInTheDocument();
    expect(getByTestId('msh--loader')).toHaveTextContent('Carregando...');
  });
});
