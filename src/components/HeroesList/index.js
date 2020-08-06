import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartEmpty } from 'assets/icons/heart-empty.svg';
// import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
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
            <S.ListeItemHerosDetails>
              <span>{hero.name}</span>
              <span>{<HeartEmpty />}</span>
            </S.ListeItemHerosDetails>
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
