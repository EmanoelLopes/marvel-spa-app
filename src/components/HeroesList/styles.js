import styled from 'styled-components';
import { media, themes } from 'styles';

export const List = styled.ul`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows:    repeat(20, 300px);
  margin: 0;
  padding: 24px 0 48px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:    repeat(10, 300px);
  `}  

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:    repeat(5, 300px);
  `}

  ${media.largeDesktop`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows:    repeat(4, 300px);
  `}

  > a {
    min-width: 220px;
  }
  
  &[data-only-favorites="true"] {
    grid-template-rows:    repeat(1, 300px);

    > li[data-is-favorite="false"] {
      display: none;
    }
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
