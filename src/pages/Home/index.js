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

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    console.log('click!');
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
        <Filters amount={heroes.length} onClick={() => console.log('toggle!')} />
        {isLoading && <Loader />}
        <HeroesList heroes={heroes} />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
