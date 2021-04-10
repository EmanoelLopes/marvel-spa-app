import React, { useState, useContext, useEffect, useCallback } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import { ChevronLeft, ChevronRight } from 'components/Icons';
import { range } from 'utils/helpers';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const rangeStart = 1;
  const rangeLimit = 6;
  const [pagination, setPagination] = useContext(PaginationContext);
  const isFirstPage = pagination?.currentPage === 1;
  const isLastPage = pagination?.currentPage === pagination?.totalPages;
  const [pageRange, setPageRange] = useState({
    from: rangeStart,
    to: (pagination?.totalPages <= rangeLimit)
      ? pagination.totalPages
      : rangeLimit,
  });
  const [pagesToRender, setPagesToRender] = useState([]);

  const handlePagination = (page) => {
    if (page + 1 === pagination?.currentPage) return false;
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page + 1) === 1 ? null : (page) * pagination?.pageLimit,
    }));
    setPageRange(() => ({
      from: page + rangeStart,
      to: page + rangeLimit,
    }));
    onPageChange(page);
  };

  const handlePreviousPage = (page) => {
    if (isFirstPage) return false;
    setPagination(() => ({
      ...pagination,
      currentPage: page - 1,
      offset: (page - 1) <= 1 ? null : (page - 2) * pagination?.pageLimit,
    }));
    // @TODO: fix pageRange on handlePreviousPage
    setPageRange((previousState) => ({
      from: previousState.from,
      to: previousState.to,
    }));
    onPageChange(page);
  };

  const handleNextPage = (page) => {
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page) >= pagination?.totalPages ? null : (page) * pagination?.pageLimit,
    }));
    // @TODO: fix pageRange on handleNextPage
    setPageRange((previousState) => ({
      from: previousState.from,
      to: previousState.to,
    }));
    onPageChange(page);
  };

  const updatePageRange = useCallback(() => {
    let newState;

    setPageRange((previousState) => {
      newState = previousState;
      return {
        from: newState.from,
        to: newState.to,
      };
    });
  }, []);

  const getPagesToRender = useCallback(() => {
    setPagesToRender(range(pageRange.from, pageRange.to));
  }, [pageRange.from, pageRange.to]);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      updatePageRange();
      getPagesToRender();
    }

    return () => unmounted = true;
  }, [updatePageRange, getPagesToRender]);

  return (
    <S.PaginationWrapper data-testid="msh--pagination">
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isFirstPage}
            onClick={() => {
              handlePreviousPage(pagination?.currentPage);
            }}>
            <ChevronLeft />
          </S.PaginationButton>
        </S.PaginationItem>
        {pagesToRender
          .fill(null)
          .map((_, index) => (
            <S.PaginationItem key={index}>
              <S.PaginationButton
                disabled={pagination?.currentPage === (index + 1)}
                isActive={(index + 1) === pagination?.currentPage}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </S.PaginationButton>
            </S.PaginationItem>
          ))}
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isLastPage}
            onClick={() => {
              handleNextPage(pagination?.currentPage);
            }}
          >
            <ChevronRight />
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  onPageChange: func.isRequired,
};
