import React from 'react';
import { func } from 'prop-types';
import * as S from './styles';

export function Toggle({ toggle }) {
  return (
    <S.SwitchToggle data-testid="msh--toggle">
      <input type="checkbox" />
      <S.SliderToggle onClick={toggle} data-testid="msh--toggle-label" />
    </S.SwitchToggle>
  );
}

Toggle.propTypes = {
  toggle: func.isRequired,
};
