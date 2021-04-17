import React, { Fragment, useState } from 'react';
import { array, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from 'components';
import { HeartEmpty, HeartFull } from 'components/Icons';
import { useLocalStorage } from 'hooks';
import { httpsTransform, sortByName, isContainedById } from 'utils/helpers';
import * as S from './styles';

export function HeroesList({ heroes, onlyFavorites }) {
  const [storedFavorites, setStoredFavorites] = useLocalStorage([], 'favorites');
  const [favorites, setFavorites] = useState(storedFavorites);

  const toggleToFavorites = (hero) => {
    const favoritesIds = favorites.map((item) => item.id);

    const addFavorite = () => {
      const newFavorites = favorites.concat(hero);
      if (newFavorites.length <= 5) {
        setFavorites(sortByName(newFavorites));
        setStoredFavorites(sortByName(newFavorites));
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

    return favoritesIds.includes(hero?.id) ? removeFavorite() : addFavorite();
  };

  return (
    <Fragment>
      <S.FavoritesWrapper>{favorites.length > 0 && (<span>{favorites.length} de 5 <HeartFull /></span>)}</S.FavoritesWrapper>
      {onlyFavorites && !favorites.length && (
        <Alert message={'Você não tem nenhum favorito selecionado!'} id="1" />
      )}
      <S.List data-testid="msh--heroes-list">
        {!onlyFavorites && heroes.map((hero) => (
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
                {isContainedById(favorites, hero.id) ? <HeartFull /> : <HeartEmpty />}
              </S.ToggleFavorite>
            </S.ListeItemHerosDetails>
          </S.ListItem>
        ))}
        {onlyFavorites && favorites.map((hero) => (
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
                {favorites.includes(hero) ? <HeartFull /> : <HeartEmpty />}
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
  onlyFavorites: false,
};

HeroesList.propTypes = {
  heroes: array,
  onlyFavorites: bool,
};
