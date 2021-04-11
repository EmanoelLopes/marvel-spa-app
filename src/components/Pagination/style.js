import styled, { css } from 'styled-components';
import { themes, media } from 'styles';

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50px;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const PaginationInfo = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;

  > span {
    margin: 0 0.5rem;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  width: 100%;

  ${media.tablet`
    flex-wrap: nowrap;
    max-width: 100%;
  `}
`;

export const PaginationItem = styled.li`
  margin: 8px;

  ${media.tablet`
    margin: 0 8px;
  `}
`;

export const PaginationButton = styled.button`
  align-items: center;
  border-radius: 4px;
  border: 2px solid ${themes.main.colors.red};
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
    cursor: initial;

    ${({ isActive }) => isActive && css`
      background-color: ${themes.main.colors.red};
      border: 2px solid ${themes.main.colors.red};
      color: ${themes.main.colors.white};
    `}

    > svg {
      fill: ${themes.main.colors.white};
    }
  }
`;
