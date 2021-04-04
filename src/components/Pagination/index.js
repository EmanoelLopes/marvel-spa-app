import React, { useContext, useCallback } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const [pagination, setPagination] = useContext(PaginationContext);

  const handlePagination = useCallback(
    (page) => {
      setPagination(() => ({
        ...pagination,
        currentPage: page,
      }));
      onPageChange();
    },
    [onPageChange, setPagination, pagination]
  );

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        <S.PaginationItem>
          <button onClick={() => handlePagination(pagination.currentPage - 1)}>
            Previous
          </button>
        </S.PaginationItem>
        {Array(pagination.totalPages)
          .fill()
          .map((_, index) => (
            <S.PaginationItem key={index}>
              <button onClick={() => handlePagination(index + 1)}>{index + 1}</button>
            </S.PaginationItem>
          ))}
        <S.PaginationItem>
          <button onClick={() => handlePagination(pagination.currentPage + 1)}>
            Next
          </button>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  onPageChange: func.isRequired,
};
