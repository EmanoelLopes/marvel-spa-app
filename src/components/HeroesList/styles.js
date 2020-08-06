import styled from 'styled-components';
import { themes } from 'styles';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 24px 0;

  a {
    max-width: 20%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 330px;
  list-style: none;
`;

export const ListItemImage = styled.div`
  background-image: url(${props => props.bg});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 3px solid ${themes.main.colors.red};
  height: 200px;
  width: 200px;
`;
