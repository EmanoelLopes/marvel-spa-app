import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import { ChevronLeft, ChevronRight } from 'components/Icons';
import { range } from 'utils/helpers';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const [pagination, setPagination] = useContext(PaginationContext);
  const isFirstPage = pagination?.currentPage === 1;
  const isLastPage = pagination?.currentPage === pagination?.totalPages;
  const [pageRange] = useState({
    from: 1,
    to: (pagination?.totalPages <= 6)
      ? pagination.totalPages
      : 6
  });
  const [pagesToRender] = useState(range(pageRange.from, pageRange.to));

  const handlePagination = (page) => {
    if (page + 1 === pagination?.currentPage) return false;
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page + 1) === 1 ? null : (page) * pagination?.pageLimit,
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
          .fill()
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
