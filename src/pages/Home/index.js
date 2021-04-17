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
import { getHeroes, getHeroesByName } from 'services';
import { useDebounce } from 'hooks';
import * as S from 'styles/styled';

export function Home() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [, setIsSorted] = useState(false);
  const [pagination, setPagination] = useContext(PaginationContext);
  const [params, setParams] = useState({
    offset: null,
  });
  const [error, setError] = useState({
    hasError: false,
    statusCode: 0,
    message: 'Eita nóis! Aconteceu uma treta aqui :/!',
  });
  const debouncedSearch = useDebounce(searchValue, 500);
  const handleClick = (e) => setSearchValue(e.target.value);
  const handleSearch = (e) => setSearchValue(e.target.value);

  const updatePaginationState = () => {
    let newValue;

    setPagination((previousValue) => {
      newValue = previousValue;
      return {
        ...previousValue,
      };
    });
    setParams((previousValue) => {
      return { ...previousValue, offset: newValue?.offset };
    });
  };

  /* eslint-disable */
  useEffect(() => {
    let unmounted = false;

    if(!unmounted) {
      updatePaginationState();
    }

    return () => unmounted = true;
  }, []);
  /* eslint-enable */

  const getHeroesList = useCallback(
    (queryParams) => {
      setIsLoading(true);

      const handleSuccess = (data) => {
        const { results } = data?.data;
        setHeroes(results);
        setIsLoading(false);
        setPagination((previousValue) => ({
          ...previousValue,
          totalPages: Math.ceil(data.data.total / 20),
        }));
      };

      const handleErrors = (err) => {
        setError({
          hasError: true,
          statusCode: err?.status,
          message: err?.data.message,
        });
        setIsLoading(false);
      };

      return (!debouncedSearch.length)
        ? getHeroes(queryParams)
          .then(({ data }) => handleSuccess(data))
          .catch(({ response }) => handleErrors(response))
        : getHeroesByName(debouncedSearch)
          .then(({ data }) => handleSuccess(data))
          .catch(({ response }) => handleErrors(response));
    },
    [debouncedSearch, setPagination]
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
        <SearchBar onChange={handleSearch} onClick={handleClick} />
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
        {pagination.totalPages >= 2 && <Pagination onPageChange={handlePagination} />}
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
