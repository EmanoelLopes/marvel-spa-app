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
    color: ${lighten(.1, themes.main.colors.red)};
    display: flex;
    margin: 0 8px;

    > svg {
      margin: 0 8px;
    }
  }
`;

