import React from 'react';
import { shallow } from 'enzyme';
import Root from 'components/Root';

describe('<Root />', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find('[data-test-id="RootAPP"]')).toHaveLength(1);
  });
});

