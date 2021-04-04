import React from 'react';
import { number, func, bool } from 'prop-types';
import { Toggle } from 'components';
import { HeroIcon, HeartFull, HeartEmpty } from 'components/Icons';
import * as S from './styles';

export function Filters({ amount, onClick, selectFavorites, onlyFavorites }) {
  return (
    <S.FiltersSection data-testid="msh--filters">
      <span>Encontrados {amount} heróis</span>
      <S.ToggleSorter>
        <S.SorterWrapper>
          <HeroIcon />
          <span>Ordenar por nome - A/Z</span>
          <Toggle toggle={onClick} />
        </S.SorterWrapper>
        <S.SelectFavorites
          data-only-favorites={onlyFavorites}
          onClick={selectFavorites}
          data-testid="msh--show-only-favorites"
        >
          {onlyFavorites ? (
            <HeartFull data-testid="msh--icon-heart-full" />
          ) : (
            <HeartEmpty data-testid="msh--icon-heart-empty" />
          )}
          <span>Somente Favoritos</span>
        </S.SelectFavorites>
      </S.ToggleSorter>
    </S.FiltersSection>
  );
}

Filters.propTypes = {
  amount: number.isRequired,
  onClick: func.isRequired,
  selectFavorites: func.isRequired,
  onlyFavorites: bool.isRequired,
};
