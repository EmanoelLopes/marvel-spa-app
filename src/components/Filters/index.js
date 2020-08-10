import React from 'react';
import { number, func, bool } from 'prop-types';
import Toggle from 'components/Toggle';
import { ReactComponent as HeroIcon } from 'assets/icons/hero.svg';
import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
import { ReactComponent as HeartEmpty } from 'assets/icons/heart-empty.svg';
import * as S from './styles';

const Filters = ({
  amount,
  onClick,
  selectFavorites,
  onlyFavorites,
}) => (
  <S.FiltersSection>
    <span>Encontrados {amount} heróis</span>
    <S.ToggleSorter>
      <span>
        <HeroIcon /> Ordenar por nome - A/Z
      </span>
      <Toggle toggle={onClick} dataTestId="SortByName"/>
      <S.SelectFavorites
        data-only-favorites={onlyFavorites}
        onClick={selectFavorites}
        data-test-id="ShowOnlyFavorites"
      >
        {onlyFavorites ? <HeartFull /> : <HeartEmpty />}
        <span>Somente Favoritos</span>
      </S.SelectFavorites>
    </S.ToggleSorter>
  </S.FiltersSection>
);


Filters.propTypes = {
  amount: number.isRequired,
  onClick: func.isRequired,
  selectFavorites: func.isRequired,
  onlyFavorites: bool.isRequired,
};

export default Filters;
