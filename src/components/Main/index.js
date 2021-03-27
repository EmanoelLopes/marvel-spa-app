/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

export function Main({ children }) {
  return <S.MainWrapper data-testid="msh--main">{children}</S.MainWrapper>;
}

Main.propTypes = {
  chidren: PropTypes.node.isRequired,
};
