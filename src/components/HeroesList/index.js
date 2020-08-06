import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './styles';

const HeroesList = ({ heroes }) => {
  return (
    <S.List>
      {heroes.map((hero) => (
        <Link key={hero.id} to={`/hero/${hero.id}`}>
          <S.ListItem>
            <S.ListItemImage
              bg={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
              title={hero.name}
            />
            <span>{hero.name}</span>
          </S.ListItem>
        </Link>
      ))}
    </S.List>
  );
};

HeroesList.defaultProps = {
  heroes: [],
};

HeroesList.propTypes = {
  heroes: array,
};

export default HeroesList;
