import React from 'react';
import { func } from 'prop-types';
import * as S from './styles';

const Toggle = ({ onClick }) => {
  return (
    <S.SwitchToggle>
      <input type="checkbox" />
      <S.SliderToggle onClick={onClick} />
    </S.SwitchToggle>
  );
};

Toggle.propTypes = {
  onClick: func.isRequired,
};

export default Toggle;
