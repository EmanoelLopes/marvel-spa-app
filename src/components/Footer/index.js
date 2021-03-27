import React from 'react';
import { FooterLogo } from 'components/Icons';
import * as S from './styles';

export function Footer() {
  return (
    <S.FooterWrapper data-testid="msh--footer">
      <p>
        <a href="https://developer.marvel.com/" title="Developer Marvel">
          <FooterLogo />
        </a>
      </p>
    </S.FooterWrapper>
  );
}
