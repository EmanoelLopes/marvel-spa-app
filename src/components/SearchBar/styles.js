import styled from 'styled-components';
import { lighten } from 'polished';
import { sizes, themes } from 'styles';

export const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  margin: 24px 0;
  max-width: ${sizes.tablet}px;
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: ${lighten(0.4, themes.main.colors.red)};
  border-radius: 50px;
  border: none;
  color: ${lighten(0.1, themes.main.colors.red)};
  padding: 0 16px 0 48px;
  width: 100%;

  ::-webkit-input-placeholder {
    color: ${lighten(0.2, themes.main.colors.red)};
  }

  ::-moz-placeholder {
    color: ${lighten(0.2, themes.main.colors.red)};
  }

  ::-ms-placeholder {
    color: ${lighten(0.2, themes.main.colors.red)};
  }
`;

export const SearchButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  left: 12px;
  padding: 4px;
  position: absolute;
  top: 12px;
`;
