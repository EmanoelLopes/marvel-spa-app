import React, { useState, useEffect, useCallback } from 'react';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Filters from 'components/Filters';
import HeroesList from 'components/HeroesList';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Alert from 'components/Alert';
import { getHeroes } from 'utils/request';
import * as S from 'styles/styled';

const Home = () => {
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

  const getHeroesList = useCallback(
    () => {
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
            statusCode: response.status,
            message: response.data.message,
          });
          setIsLoading(false);
        });
      },
    [],
  );

  const toggleFavorites = () => {
    setShowOnlyFavorites((showOnlyFavorites) => !showOnlyFavorites);
  };

  const toggleSorted = () => {
    setIsSorted((isSorted) => !isSorted);
    setHeroes(heroes.reverse());
  };

  const handleClick = () => {
    console.log('click!');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.which === 13);
  };

  useEffect(() => {
    getHeroesList();
  }, [getHeroesList]);

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <SearchBar
          onChange={handleChange}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        />
        <Filters
          amount={heroes.length}
          onClick={toggleSorted}
          onlyFavorites={showOnlyFavorites}
          selectFavorites={toggleFavorites}
        />
        {isLoading && <Loader />}
        {error.hasError ? (
          <Alert message={`Error ${error.statusCode}: ${error.message}`} />
        ) : (
          <HeroesList
            heroes={heroes}
            value={searchValue}
            onlyFavorites={showOnlyFavorites}
          />
        )}
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
