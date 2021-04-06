import React, { useContext } from 'react';
import { func } from 'prop-types';
import { PaginationContext } from 'contexts/pagination/pagination.context';
import * as S from './style';

export function Pagination({ onPageChange }) {
  const [pagination, setPagination] = useContext(PaginationContext);

  const handlePagination = (page) => {
    setPagination(() => ({
      ...pagination,
      currentPage: page + 1,
      offset: (page + 1) === 1 ? null : (page) * pagination.pageLimit,
    }));
    onPageChange(page);
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        <S.PaginationItem>
        </S.PaginationItem>
        {Array(pagination.totalPages)
          .fill()
          .map((_, index) => (
            <S.PaginationItem key={index}>
              <S.PaginationButton
                isActive={(index + 1) === pagination.currentPage}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </S.PaginationButton>
            </S.PaginationItem>
          ))}
        <S.PaginationItem>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  onPageChange: func.isRequired,
};
