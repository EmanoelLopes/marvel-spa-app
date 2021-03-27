import React from 'react';
import { render } from 'setupTests';
import { Footer } from 'components';

describe('[Components] - <Footer />', () => {
  it('should render Footer without breaking', () => {
    const { getByTestId } = render(<Footer />);
    const element = getByTestId('msh--footer');
    expect(element).toBeInTheDocument();
  });
});
