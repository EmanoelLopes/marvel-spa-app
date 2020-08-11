import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header';
import { Link } from 'react-router-dom';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  const title = 'Explore o Universo';
  const text = 'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que descobrirá em breve.';

  it('should render properly', () => {
    expect(wrapper.find(Link).prop('to')).toBe('/');
    expect(wrapper.find('h1').text()).toBe(title);
    expect(wrapper.find('p').text()).toBe(text);
  });
});