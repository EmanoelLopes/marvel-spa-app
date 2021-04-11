import React, { useState, useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import { ChevronLeft, ChevronRight, ChevronLeftDouble, ChevronRightDouble } from 'components/Icons';
import { range } from 'utils/helpers';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const rangeStart = 1;
  const rangeLimit = 6;
  const [pagination, setPagination] = useContext(PaginationContext);
  const currentPage = pagination?.currentPage;
  const totalPages = pagination?.totalPages;
  const pageLimit = pagination?.pageLimit;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const [pageRange, setPageRange] = useState({
    from: rangeStart,
    to: (totalPages <= rangeLimit)
      ? totalPages
      : rangeLimit,
  });

  const handlePagination = (page) => {
    if (page + 1 === currentPage) return false;
    setPagination(() => ({
      ...pagination,
      currentPage: page,
      offset: (page) === 1 ? null : (page - 1) * pageLimit,
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
      offset: (page - 1) <= 1 ? null : (page - 2) * pageLimit,
    }));
    onPageChange(page);
  };

  const handleNextPage = (page) => {
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page) >= totalPages ? null : (page) * pageLimit,
    }));
    onPageChange(page);
  };

  const getPageRange = () => {
    if (totalPages <= rangeLimit) return range(rangeStart, rangeLimit);
    return range(pageRange.from, pageRange.to <= totalPages ? pageRange.to : totalPages);
  };

  useEffect(() => {
    let unmounted = false;

    if(!unmounted) {
      setPageRange(() => ({
        from: currentPage,
        to: currentPage + (rangeLimit - 1),
      }));
    }
    return () => {
      unmounted = true;
    };
  }, [currentPage]);

  return (
    <S.PaginationWrapper data-testid="msh--pagination">
      <S.PaginationInfo>
        <span data-testid="msh--home-pagination-current-page">
          {pagination?.currentPage}
        </span> / <span data-testid="msh--home-pagination-total-pages">
          {pagination?.totalPages}
        </span>
      </S.PaginationInfo>
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            data-testid="msh--pagination-button-regress"
            disabled={currentPage < rangeLimit}
            onClick={() => handlePagination(currentPage - (rangeLimit - 1))}
          >
            <ChevronLeftDouble />
          </S.PaginationButton>
        </S.PaginationItem>
        <S.PaginationItem>
          <S.PaginationButton
            data-testid="msh--pagination-button-previous-page"
            disabled={isFirstPage}
            onClick={() => handlePreviousPage(currentPage)}
          >
            <ChevronLeft />
          </S.PaginationButton>
        </S.PaginationItem>
        {getPageRange()
          .map((value) => (
            <S.PaginationItem key={value}>
              <S.PaginationButton
                data-testid={`msh--pagination-button-page-${value}`}
                disabled={currentPage === (value)}
                isActive={(value) === currentPage}
                onClick={() => handlePagination(value)}
              >
                {value}
              </S.PaginationButton>
            </S.PaginationItem>
          ))}
        <S.PaginationItem>
          <S.PaginationButton
            data-testid="msh--pagination-button-next-page"
            disabled={isLastPage}
            onClick={() => handleNextPage(currentPage)}
          >
            <ChevronRight />
          </S.PaginationButton>
        </S.PaginationItem>
        <S.PaginationItem>
          <S.PaginationButton
            data-testid="msh--pagination-button-advance"
            disabled={(totalPages - currentPage) <= rangeLimit}
            onClick={() => handleNextPage(currentPage + (rangeLimit - 1))}
          >
            <ChevronRightDouble />
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  onPageChange: func.isRequired,
};
