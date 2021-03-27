import React from 'react';
import * as S from './styles';
import MarvelLoaderGif from 'assets/images/marvel-loader.gif';

export function Loader() {
  return (
    <S.LoaderContainer data-testid="msh--loader">
      <p>Carregando...</p>
      <img src={MarvelLoaderGif} alt="Marvel" />
    </S.LoaderContainer>
  );
}
