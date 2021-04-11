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
  const isFirstPage = pagination?.currentPage === 1;
  const isLastPage = pagination?.currentPage === pagination?.totalPages;
  const [pageRange, setPageRange] = useState({
    from: rangeStart,
    to: (pagination?.totalPages <= rangeLimit)
      ? pagination.totalPages
      : rangeLimit,
  });

  const handlePagination = (page) => {
    if (page + 1 === pagination?.currentPage) return false;
    setPagination(() => ({
      ...pagination,
      currentPage: page,
      offset: (page) === 1 ? null : (page - 1) * pagination?.pageLimit,
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
    onPageChange(page);
  };

  const handleNextPage = (page) => {
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page) >= pagination?.totalPages ? null : (page) * pagination?.pageLimit,
    }));
    onPageChange(page);
  };

  const getPageRange = () => {
    if (pagination?.totalPages <= rangeLimit) return range(rangeStart, rangeLimit);
    return range(pageRange.from, pageRange.to <= pagination?.totalPages ? pageRange.to : pagination.totalPages);
  };

  useEffect(() => {
    let unmounted = false;

    if(!unmounted) {
      getPageRange();

      setPageRange(() => ({
        from: pagination?.currentPage,
        to: pagination?.currentPage + (rangeLimit - 1),
      }));
    }
    return () => {
      unmounted = true;
    };
  }, [pagination.currentPage]);

  return (
    <S.PaginationWrapper data-testid="msh--pagination">
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isFirstPage}
            onClick={() => handlePreviousPage(rangeStart + 1)}>
            <ChevronLeftDouble />
          </S.PaginationButton>
        </S.PaginationItem>
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isFirstPage}
            onClick={() => {
              handlePreviousPage(pagination?.currentPage);
            }}>
            <ChevronLeft />
          </S.PaginationButton>
        </S.PaginationItem>
        {getPageRange()
          .map((value) => (
            <S.PaginationItem key={value}>
              <S.PaginationButton
                disabled={pagination?.currentPage === (value)}
                isActive={(value) === pagination?.currentPage}
                onClick={() => handlePagination(value)}
              >
                {value}
              </S.PaginationButton>
            </S.PaginationItem>
          ))}
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isLastPage}
            onClick={() => handleNextPage(pagination?.currentPage)}>
            <ChevronRight />
          </S.PaginationButton>
        </S.PaginationItem>
        <S.PaginationItem>
          <S.PaginationButton
            disabled={isLastPage}
            onClick={() => handleNextPage(pagination?.totalPages - 1)}
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
