import React, { useContext } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const [pagination, setPagination] = useContext(PaginationContext);

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        {Array(pagination.totalPages)
          .fill()
          .map((_, index) => (
            <S.PaginationItem key={index}>
              <button
                onClick={() => {
                  setPagination((previousValue) => ({
                    ...previousValue,
                    currentPage: index + 1,
                  }));
                  onPageChange();
                }}
              >
                {index + 1}
              </button>
            </S.PaginationItem>
          ))}
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  onPageChange: func.isRequired,
};
