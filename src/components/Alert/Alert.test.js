import React from 'react';
import { shallow } from 'enzyme';
import Alert from 'components/Alert';

describe('<Alert />', () => {
  describe('props', () => {
    const message = 'Oh no, something wrong has hapned! :(';
    const messageId = 'error-code-409';
    const wrapper = shallow(<Alert message={message} messageId={messageId}  />);

    it('should render the correcly messageId props', () => {
      expect(wrapper.prop('data-test-id')).toBe(messageId);
    });

    it('should render the correcly message props', () => {
      expect(wrapper.props().children).toBe(message);
    });
  });
});

