import React from 'react';
import { render } from 'setupTests';
import { Main } from 'components';

describe('[Components] - <Main />', () => {
  it('should render Main without breaking', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('msh--main')).toBeInTheDocument();
  });
});
