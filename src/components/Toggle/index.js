import React from 'react';
import { func } from 'prop-types';
import * as S from './styles';

const Toggle = ({ toggle }) => {
  return (
    <S.SwitchToggle>
      <input type="checkbox" />
      <S.SliderToggle onClick={toggle} />
    </S.SwitchToggle>
  );
};

Toggle.propTypes = {
  toggle: func.isRequired,
};

export default Toggle;
