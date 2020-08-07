import styled from 'styled-components';
import { lighten } from 'polished';
import { themes, media } from 'styles';

export const FiltersSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;

  ${media.desktop`
    flex-direction: row;
  `}

  span {
    color: ${themes.main.colors.grey};
  }
`;

export const ToggleSorter = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;

  > span {
    align-items: center;
    color: ${lighten(0.1, themes.main.colors.red)};
    display: flex;
    margin: 0 8px;

    > svg {
      margin: 0 8px;
    }
  }
`;

export const SelectFavorites = styled.button`
  align-items: center;
  border-radius: 20px;
  border: none;
  color: ${lighten(0.1, themes.main.colors.red)};
  cursor: pointer;
  display: inline-flex;
  height: 34px;
  margin: 0 0 0 8px;
  padding: 0 8px;

  &[data-only-favorites='false'] {
    background-color: ${themes.main.colors.white};
  }

  &[data-only-favorites='true'] {
    background-color: ${lighten(0.2, themes.main.colors.lightGrey)};
  }

  svg {
    margin: 0 8px;
  }
`;
