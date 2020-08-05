import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

test('render App component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div')).toHaveLength(1);
});
