import React, { Fragment, useState } from 'react';
import { array, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from 'components/Alert';
import { ReactComponent as HeartEmpty } from 'assets/icons/heart-empty.svg';
import { ReactComponent as HeartFull } from 'assets/icons/heart-full.svg';
import { useLocalStorage } from 'hooks';
import * as S from './styles';

const HeroesList = ({ heroes, value, onlyFavorites }) => {
  const [favorites, setFavorites] = useState([]);
  const [storedValue, setStoreValue] = useLocalStorage([], 'storeFavorites');
  const filterdHeroes = (hero) => hero.name.toLowerCase().includes(value.toLowerCase());

  const toggleToFavorites = (id) => {
    const removeValues = () => {
      const elementIndex = favorites.findIndex((i) => i === id);
      const newFavorites = favorites.filter((item) => favorites[elementIndex] !== item);
      setFavorites(newFavorites);
      setStoreValue(newFavorites);
      return false;
    };

    const addValues = () => {
      const newFavorites = favorites.concat(id);
      if (newFavorites.length <= 5) {
        setFavorites(newFavorites);
        setStoreValue(newFavorites);
      };
      return false;
    };

    return favorites.includes(id) ? removeValues() : addValues();
  };

  return (
    <Fragment>
      {onlyFavorites && !storedValue.length && (
        <Alert message={'Você não tem nenhum favorito selecionado!'} />
      )}
      <S.List data-only-favorites={onlyFavorites} data-test-id="HeroesList">
        {heroes.filter(filterdHeroes).map((hero) => (
          <S.ListItem key={hero.id} data-is-favorite={storedValue.includes(hero.id)}>
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <S.ListItemImage
                bg={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
                title={hero.name}
              />
            </Link>
            <S.ListeItemHerosDetails>
              <span>{hero.name}</span>
              <S.ToggleFavorite
                onClick={() => {
                  toggleToFavorites(hero.id);
                }}
              >
                {storedValue.includes(hero.id) ? <HeartFull /> : <HeartEmpty />}
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
