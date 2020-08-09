import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as S from 'styles/styled';

const NotMatch = () => (
  <S.Wrapper>
    <S.Container>
      <Header />
      <h1>Página não encontrada :/</h1>
    </S.Container>
    <Footer />
  </S.Wrapper>
);

export default NotMatch;
