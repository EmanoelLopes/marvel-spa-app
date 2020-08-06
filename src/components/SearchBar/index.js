import React from 'react';
import { func } from 'prop-types';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import * as S from './styles';

const SearchBar = ({ onChange, onClick, onKeyDown }) => {
  return (
    <S.SearchContainer>
      <S.SearchButton onClick={onClick}>
        <SearchIcon />
      </S.SearchButton>
      <S.SearchInput
        type="text"
        placeholder="Procure por heróis"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </S.SearchContainer>
  );
};

SearchBar.defaultProps = {
  onChange: () => null,
  onClick: () => null,
  onKeyDown: () => null,
};

SearchBar.propTypes = {
  onChange: func,
  onClick: func,
  onKeyDown: func,
};

export default SearchBar;
