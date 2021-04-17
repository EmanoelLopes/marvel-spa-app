import React from 'react';
import { func, bool } from 'prop-types';
import * as S from './styles';

export function Toggle({ toggle, onlyFavorites }) {
  return (
    <S.SwitchToggle data-testid="msh--toggle">
      <input disabled={onlyFavorites} type="checkbox" />
      <S.SliderToggle disabled={onlyFavorites} onClick={toggle} data-testid="msh--toggle-label" />
    </S.SwitchToggle>
  );
}

Toggle.propTypes = {
  toggle: func.isRequired,
  onlyFavorites: bool.isRequired,
};
