import React from 'react';
import { ReactComponent as FooterLogo } from 'assets/images/marvel-logo-footer.svg';
import * as S from './styles';

const Footer = () => (
  <S.FooterWrapper>
    <p>
      <a href="https://developer.marvel.com/" title="Developer Marvel">
        <FooterLogo />
      </a>
    </p>
  </S.FooterWrapper>
);

export default Footer;
