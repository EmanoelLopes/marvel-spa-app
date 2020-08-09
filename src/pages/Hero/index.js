import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Alert from 'components/Alert';
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
    <S.Wrapper>
      <S.Container>
        <Header />
        <Link to="/">Voltar</Link>
        {isLoading && <Loader />}
        {error.hasError ? (
          <Alert message={`Error ${error.statusCode}: ${error.message}`} />
        ) : (
          <Fragment>
            <h1>{hero.name}</h1>
            <img
              src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
              alt={hero.name}
            />
            <p>{hero.description}</p>
            <h2>Últimos lançamentos</h2>
            <ul>
              {hero.comics?.items.map((item) => (
                <li key={item.resourceURI}>{item.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
export default Hero;
