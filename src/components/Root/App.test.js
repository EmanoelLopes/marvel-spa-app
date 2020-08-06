import React from 'react';
import { shallow } from 'enzyme';
import Root from 'components/Root';

test('render App component', () => {
  const wrapper = shallow(<Root />);
  expect(wrapper.find('div')).toHaveLength(1);
});
