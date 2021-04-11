import React, { Fragment, useState } from 'react';
import { array, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from 'components';
import { HeartEmpty, HeartFull } from 'components/Icons';
import { useLocalStorage } from 'hooks';
import { httpsTransform } from 'utils/helpers';
import * as S from './styles';

export function HeroesList({ heroes, value, onlyFavorites }) {
  const [storedFavorites, setStoredFavorites] = useLocalStorage([], 'favorites');
  const [favorites, setFavorites] = useState(storedFavorites);
  const filterdHeroes = (hero) => hero.name.toLowerCase().includes(value.toLowerCase());

  const toggleToFavorites = (hero) => {
    const addFavorite = () => {
      const newFavorites = favorites.concat(hero);
      if (newFavorites.length <= 5) {
        setFavorites(newFavorites);
        setStoredFavorites(newFavorites);
      }
      return false;
    };

    const removeFavorite = () => {
      const elementIndex = favorites.findIndex((item) => item.id === hero.id);
      const newFavorites = favorites.filter((item) => favorites[elementIndex].id !== item.id);
      setFavorites(newFavorites);
      setStoredFavorites(newFavorites);
      return false;
    };

    return favorites.includes(hero) ? removeFavorite() : addFavorite();
  };

  return (
    <Fragment>
      {onlyFavorites && !storedFavorites.length && (
        <Alert message={'Você não tem nenhum favorito selecionado!'} id="1" />
      )}
      <S.List data-testid="msh--heroes-list">
        {!onlyFavorites ? heroes.filter(filterdHeroes).map((hero) => (
          <S.ListItem key={hero.id}>
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <S.ListItemImage
                data-testid={`msh--hero-${hero.id}-bg`}
                bg={`${httpsTransform(hero.thumbnail?.path)}.${hero.thumbnail?.extension}`}
                title={hero.name}
              />
            </Link>
            <S.ListeItemHerosDetails>
              <span>{hero.name}</span>
              <S.ToggleFavorite
                onClick={() => toggleToFavorites(hero)}
                data-testid={`msh--hero-${hero.id}`}
              >
                {storedFavorites.includes(hero) ? <HeartFull /> : <HeartEmpty />}
              </S.ToggleFavorite>
            </S.ListeItemHerosDetails>
          </S.ListItem>
        )) : storedFavorites.map((hero) => (
          <S.ListItem key={hero.id}>
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <S.ListItemImage
                data-testid={`msh--hero-${hero.id}-bg`}
                bg={`${httpsTransform(hero.thumbnail?.path)}.${hero.thumbnail?.extension}`}
                title={hero.name}
              />
            </Link>
            <S.ListeItemHerosDetails>
              <span>{hero.name}</span>
              <S.ToggleFavorite
                onClick={() => toggleToFavorites(hero)}
                data-testid={`msh--hero-${hero.id}`}
              >
                {storedFavorites.includes(hero) ? <HeartFull /> : <HeartEmpty />}
              </S.ToggleFavorite>
            </S.ListeItemHerosDetails>
          </S.ListItem>
        ))}
      </S.List>
    </Fragment>
  );
}

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
