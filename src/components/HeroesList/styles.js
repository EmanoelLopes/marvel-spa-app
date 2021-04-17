import styled from 'styled-components';
import { media, themes } from 'styles';

export const List = styled.ul`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(20, auto);
  margin: 0;
  padding: 24px 0 48px;

  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:    repeat(10, auto);
  `}

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:    repeat(5, auto);
  `}

  ${media.largeDesktop`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows:    repeat(4, auto);
  `}

  > a {
    min-width: 220px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 220px;
`;

export const ListItemImage = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 5px solid ${themes.main.colors.red};
  height: 260px;
  width: 100%;
`;

export const ListeItemHerosDetails = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
`;

export const ToggleFavorite = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const FavoritesWrapper = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 32px;
  width: 100%;

  ${media.desktop`
    justify-content: flex-end;
  `}

  span {
    align-items: center;
    display: flex;
  }

  span > svg {
    margin: 0 8px;
  }
`;
