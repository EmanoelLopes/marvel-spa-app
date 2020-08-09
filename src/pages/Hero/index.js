import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Alert from 'components/Alert';
import HeroContainer from 'components/HeroContainer';
import { getHero } from 'utils/request';
import * as S from 'styles/styled';

const Hero = () => {
  const [hero, setHero] = useState({});
  const [error, setError] = useState({
    hasError: false,
    statusCode: 0,
    message: 'An Error has ocurred!',
  });
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  const getHeroData = useCallback((heroId) => {
    setIsLoading(true);

    return getHero(heroId)
      .then(({ data }) => {
        setIsLoading(false);
        const { results } = data.data;
        setHero(results[0]);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setError({
          hasError: true,
          statusCode: response.status,
          message: response.data.message,
        });
      });
  }, []);

  useEffect(() => {
    getHeroData(id);
  }, [getHeroData, id]);

  return (
    <S.Wrapper hero>
      <S.Container>
        <Header />
        {isLoading && <Loader />}
        <Main>
          {error.hasError ? (
            <Alert message={`Error ${error.statusCode}: ${error.message}`} />
          ) : (
            <HeroContainer data={hero} />
          )}
        </Main>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
export default Hero;
