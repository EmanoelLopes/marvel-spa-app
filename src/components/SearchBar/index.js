import React from 'react';
import { func } from 'prop-types';
import { SearchIcon } from 'components/Icons';
import * as S from './styles';

export function SearchBar({ onChange, onClick }) {
  return (
    <S.SearchContainer data-testid="msh--searchbar">
      <S.SearchButton data-testid="msh--searchbar-button" onClick={onClick}>
        <SearchIcon />
      </S.SearchButton>
      <S.SearchInput
        data-testid="msh--searchbar-input"
        type="text"
        placeholder="Procure por heróis"
        onChange={onChange}
      />
    </S.SearchContainer>
  );
}

SearchBar.propTypes = {
  onChange: func.isRequired,
  onClick: func.isRequired,
};
