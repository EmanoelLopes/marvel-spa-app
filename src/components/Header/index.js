import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Logo from 'assets/images/marvel-logo.svg';

export function Header() {
  return (
    <S.HeaderHome data-testid="msh--header">
      <Link to="/">
        <img src={Logo} alt="Marvel" />
      </Link>
      <h1>Explore o Universo</h1>
      <p>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama -
        e aqueles que descobrirá em breve.
      </p>
    </S.HeaderHome>
  );
}

export default Header;
