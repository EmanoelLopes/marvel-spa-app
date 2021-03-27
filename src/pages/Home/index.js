import React, { useState, useEffect, useCallback } from 'react';
import {
  Header,
  SearchBar,
  Filters,
  HeroesList,
  Main,
  Footer,
  Loader,
  Alert,
} from 'components';
import { getHeroes } from 'services';
import * as S from 'styles/styled';

export function Home() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    statusCode: 0,
    message: 'An Error has ocurred!',
  });
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [, setIsSorted] = useState(false);

  const getHeroesList = useCallback(() => {
    setIsLoading(true);

    return getHeroes()
      .then(({ data }) => {
        const { results } = data.data;
        setHeroes(results);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError({
          hasError: true,
          statusCode: response?.status,
          message: response?.data.message,
        });
        setIsLoading(false);
      });
  }, []);

  const toggleFavorites = () => {
    setShowOnlyFavorites((showOnlyFavorites) => !showOnlyFavorites);
  };

  const toggleSorted = () => {
    setIsSorted((isSorted) => !isSorted);
    setHeroes(heroes.reverse());
  };

  const handleClick = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      getHeroesList();
    }

    return () => (unmounted = true);
  }, [getHeroesList]);

  return (
    <S.Wrapper data-testid="msh--page-home">
      <S.Container>
        <Header />
        <SearchBar onChange={handleChange} onClick={handleClick} />
        <Filters
          amount={heroes.length}
          onClick={toggleSorted}
          onlyFavorites={showOnlyFavorites}
          selectFavorites={toggleFavorites}
        />
        <Main>
          {isLoading && <Loader />}
          {error.hasError ? (
            <Alert
              message={`Error ${error.statusCode}: ${error.message}`}
              messageId={`error-${error.statusCode}`}
            />
          ) : (
            <HeroesList
              heroes={heroes}
              value={searchValue}
              onlyFavorites={showOnlyFavorites}
            />
          )}
        </Main>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
