import React from 'react';
import * as S from './styles';
import MarvelLoaderGif from 'assets/images/marvel-loader.gif';

const Loader = () => {
  return (
    <S.LoaderContainer>
      <p>Carregando...</p>
      <img src={MarvelLoaderGif} alt="Marvel" />
    </S.LoaderContainer>
  );
};

export default Loader;
