import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
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
    events: 116,
    offset: null,
  });
  const [error, setError] = useState({
    hasError: false,
    statusCode: 0,
    message: 'Eita nóis! Aconteceu uma treta aqui :/!',
  });

  const updatePaginationState = () => {
    let previous;

    setPagination((previousValue) => {
      previous = previousValue;
      return {
        ...previousValue,
      };
    });
    setParams((previousValue) => {
      return { ...previousValue, offset: previous?.offset };
    });
  };

  /* eslint-disable */
  useEffect(() => {
    updatePaginationState();
  }, []);
  /* eslint-enable */

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

  /* eslint-disable */
  const handlePagination = useCallback(() => {
    updatePaginationState();

    setParams((previousValue) => {
      return { ...previousValue, offset: previousValue?.offset };
    });
  }, [setParams]);
  /* eslint-enable */

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
        {pagination.totalPages >= 2 && (
          <Fragment>
            <p>{pagination?.currentPage} / {pagination?.totalPages}</p>
            <Pagination onPageChange={handlePagination} />
          </Fragment>
        )}
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
