import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

export function Alert({ message, id }) {
  return <S.AlertText data-testid={`msh--alert-${id}`}>{message}</S.AlertText>;
}

Alert.propTypes = {
  message: string.isRequired,
  id: string.isRequired,
};
