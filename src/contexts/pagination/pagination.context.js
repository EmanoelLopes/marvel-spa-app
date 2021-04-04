import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const initialState = {
  totalPages: null,
  pageLimit: 20,
  currentPage: 1,
};

const PaginationContext = createContext(null);

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
