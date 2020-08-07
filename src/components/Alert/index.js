import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

const Alert = ({ message }) => <S.AlertText>{message}</S.AlertText>;

Alert.propTypes = {
  message: string.isRequired,
};

export default Alert;
