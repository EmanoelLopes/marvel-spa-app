import React from 'react';
import { Header, Footer } from 'components';
import * as S from 'styles/styled';

export function NotMatch() {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <h1>Página não encontrada :/</h1>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
