import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

const Alert = ({ message, messageId }) => <S.AlertText data-test-id={messageId}>{message}</S.AlertText>;

Alert.propTypes = {
  message: string.isRequired,
  messageId: string.isRequired,
};

export default Alert;
