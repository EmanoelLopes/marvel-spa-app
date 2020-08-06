import React from 'react';
import { number, func } from 'prop-types';
import Toggle from 'components/Toggle';
import { ReactComponent as HeroIcon } from 'assets/icons/hero.svg';
import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
import * as S from './styles';

const Filters = ({ amount, onClick }) => {
  return (
    <S.FiltersSection>
      <span>Encontrados {amount} heróis</span>
      <S.ToggleSorter>
        <span>
          <HeroIcon /> Ordenar por nome - A/Z
        </span>
        <Toggle onClick={onClick} />
        <S.SelectFavorites>
          <HeartFull /> Somente Favoritos
        </S.SelectFavorites>
      </S.ToggleSorter>
    </S.FiltersSection>
  );
};

Filters.propTypes = {
  amount: number.isRequired,
  onClick: func.isRequired,
};

export default Filters;
