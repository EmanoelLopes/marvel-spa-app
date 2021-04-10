import React from 'react';
import * as S from './styles';
import MarvelLoaderVideo from 'assets/videos/marvel-loader.mp4';

export function Loader() {
  return (
    <S.LoaderContainer data-testid="msh--loader">
      <p>Carregando...</p>
      <video src={MarvelLoaderVideo} autoPlay loop></video>
    </S.LoaderContainer>
  );
}
