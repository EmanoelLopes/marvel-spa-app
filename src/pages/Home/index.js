import React, { useState, useEffect, useCallback, useContext } from 'react';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import {
  Alert,
  Filters,
  Footer,
  Header,
  HeroesList,
  Loader,
  Main,
  Pagination,
  SearchBar,
} from 'components';
import { getHeroes } from 'services';
import * as S from 'styles/styled';

export function Home() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [, setIsSorted] = useState(false);
  const [pagination, setPagination] = useContext(PaginationContext);
  const [params, setParams] = useState({
    events: 315,
    offset: null,
  });
  const [error, setError] = useState({
    hasError: false,
    statusCode: 0,
    message: 'Eita nóis! Aconteceu uma treta aqui :/!',
  });

  const getCurrentPage = () =>
    pagination.currentPage === 1
      ? null
      : (pagination.currentPage - 1) * pagination.pageLimit;

  const getHeroesList = useCallback(
    (queryParams) => {
      setIsLoading(true);

      return getHeroes(queryParams)
        .then(({ data }) => {
          const { results } = data.data;
          setHeroes(results);
          setIsLoading(false);
          setPagination((previousValue) => ({
            ...previousValue,
            totalPages: Math.ceil(data.data.total / 20),
          }));
        })
        .catch(({ response }) => {
          setError({
            hasError: true,
            statusCode: response?.status,
            message: response?.data.message,
          });
          setIsLoading(false);
        });
    },
    [setPagination]
  );

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
      setHeroes([]);
      getHeroesList(params);
    }

    return () => (unmounted = true);
  }, [getHeroesList, params]);

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
        {`${pagination.currentPage} ---- ${pagination.totalPages}`}
        <Pagination
          onPageChange={() =>
            setParams((previousValue) => ({
              ...previousValue,
              offset: getCurrentPage(),
            }))
          }
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
