import styled from 'styled-components';
import { themes, media } from 'styles';

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em;

  ${media.desktop`
    padding: 2em 0;
  `}

  h1, h2 {
    color: ${themes.main.colors.darkGrey};
  }

  img {
    border: 5px solid ${themes.main.colors.red};
  }
`;

export const HeroMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.desktop`
    flex-direction: row;
  `}

  > article {
    padding: 1em;
  }
`;

export const HeroImage = styled.img`
  max-width: 360px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
