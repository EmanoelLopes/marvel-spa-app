import styled from 'styled-components';
import { themes, media, sizes } from 'styles';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  ${media.desktop`
    max-width: ${sizes.largeDesktop}px;
  `}
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.hero && themes.main.colors.lightGreen};
  height: 100vh;
  overflow: auto;
  width: 100vw;
`;
