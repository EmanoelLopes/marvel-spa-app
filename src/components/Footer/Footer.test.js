import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/Footer';
import { ReactComponent as FooterLogo } from 'assets/images/marvel-logo-footer.svg';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('should render with the correclty attributes', () => {
    expect(wrapper.find('[href="https://developer.marvel.com/"]')).toHaveLength(1);
    expect(wrapper.find('[title="Developer Marvel"]')).toHaveLength(1);
    expect(wrapper.find(FooterLogo)).toHaveLength(1);
  });
});
