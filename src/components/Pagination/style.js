import styled, { css } from 'styled-components';
import { themes } from 'styles';

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 50px;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

export const PaginationItem = styled.li`
  margin: 0 8px;
`;

export const PaginationButton = styled.button`
  align-items: center;
  border: 2px solid ${themes.main.colors.red};
  border-radius: 4px;
  color: ${themes.main.colors.red};
  display: flex;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  width: 32px;

  > svg {
    fill: ${themes.main.colors.red};
  }

  ${({ isActive }) => isActive && css`
    background-color: ${themes.main.colors.red};
    color: ${themes.main.colors.white};
  `}

  &:hover {
    background-color: ${themes.main.colors.white};
    color: ${themes.main.colors.red};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${themes.main.colors.lightGrey};
    border: 2px solid ${themes.main.colors.lightGrey}; 
    cursor: not-allowed;

    > svg {
      fill: ${themes.main.colors.white};
    }
  }
`;
