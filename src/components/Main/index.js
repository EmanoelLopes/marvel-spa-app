import React from 'react';
import { element } from 'prop-types';
import * as S from './styles';

const Main = ({ children }) => (
  <S.MainWrapper>
    {children}
  </S.MainWrapper>
);

Main.defaultProps = {
  children: '<div />',
};

Main.propTypes = {
  chidren: element,
};

export default Main;
