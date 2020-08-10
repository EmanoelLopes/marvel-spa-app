import React from 'react';
import { func, string } from 'prop-types';
import * as S from './styles';

const Toggle = ({ toggle, dataTestId }) => {
  return (
    <S.SwitchToggle>
      <input type="checkbox" />
      <S.SliderToggle onClick={toggle} data-test-id={dataTestId} />
    </S.SwitchToggle>
  );
};

Toggle.propTypes = {
  toggle: func.isRequired,
  dataTestId: string.isRequired,
};

export default Toggle;
