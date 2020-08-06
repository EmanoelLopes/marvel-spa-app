import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import HeroesList from 'components/HeroesList';
import Footer from 'components/Footer';
import { getHeroes } from 'utils/request';
import * as S from 'styles/styled';

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  const getHeroesList = () => {
    return getHeroes()
      .then(({ data }) => {
        const { results } = data.data;
        setHeroes(results);
      })
      .catch((e) => {
        console.log(e);
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
        <HeroesList heroes={heroes} />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
