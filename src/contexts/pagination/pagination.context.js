import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const initialState = {
  totalPages: 1,
  pageLimit: 20,
  currentPage: 1,
  offset: null,
};

const PaginationContext = createContext([]);

const PaginationContextProvider = ({ children }) => {
  const [pagination, setPagination] = useState(initialState);

  return (
    <PaginationContext.Provider value={[pagination, setPagination]}>
      {children}
    </PaginationContext.Provider>
  );
};

PaginationContextProvider.defaultProps = {
  children: <div />,
};

PaginationContextProvider.propTypes = {
  children: node,
};

export { PaginationContext, PaginationContextProvider };
