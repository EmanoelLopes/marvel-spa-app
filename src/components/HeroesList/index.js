import React, { Fragment, useState } from 'react';
import { array, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from 'components/Alert';
import { ReactComponent as HeartEmpty } from 'assets/icons/heart-empty.svg';
import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
import * as S from './styles';

const HeroesList = ({ heroes, value, onlyFavorites }) => {
  const [favorites, setFavorites] = useState([]);
  const filterdHeroes = (hero) => hero.name.toLowerCase().includes(value.toLowerCase());

  const toggleToFavorites = (id) => {
    const removeValues = () => {
      const elementIndex = favorites.findIndex((i) => i === id);
      return setFavorites(favorites.filter((item) => favorites[elementIndex] !== item));
    };

    const addValues = () => {
      return favorites.length < 5 && setFavorites(favorites.concat(id));
    };

    return favorites.includes(id) ? removeValues() : addValues();
  };

  return (
    <Fragment>
      {onlyFavorites && !favorites.length && (
        <Alert message={'Você não tem nenhum favorito selecionado!'} />
      )}
      <S.List data-only-favorites={onlyFavorites}>
        {heroes.filter(filterdHeroes).map((hero) => (
          <S.ListItem key={hero.id} data-is-favorite={favorites.includes(hero.id)}>
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <S.ListItemImage
                bg={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
                title={hero.name}
              />
            </Link>
            <S.ListeItemHerosDetails>
              <span>{hero.name}</span>
              <S.ToggleFavorite onClick={() => toggleToFavorites(hero.id)}>
                {favorites.includes(hero.id) ? <HeartFull /> : <HeartEmpty />}
              </S.ToggleFavorite>
            </S.ListeItemHerosDetails>
          </S.ListItem>
        ))}
      </S.List>
    </Fragment>
  );
};

HeroesList.defaultProps = {
  heroes: [],
  value: '',
  onlyFavorites: false,
};

HeroesList.propTypes = {
  heroes: array,
  value: string,
  onlyFavorites: bool,
};

export default HeroesList;
