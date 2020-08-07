import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Filters from 'components/Filters';
import HeroesList from 'components/HeroesList';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import { getHeroes } from 'utils/request';
import * as S from 'styles/styled';

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [, setIsSorted] = useState(false);

  const getHeroesList = () => {
    setIsLoading(true);

    return getHeroes()
      .then(({ data }) => {
        const { results } = data.data;
        setHeroes(results);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const toggleFavorites = () => {
    setShowOnlyFavorites(showOnlyFavorites => !showOnlyFavorites);
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
  }, []);

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
          selectFavorites={toggleFavorites}
        />
        {isLoading && <Loader />}
        <HeroesList
          heroes={heroes}
          value={searchValue}
          onlyFavorites={showOnlyFavorites}
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
