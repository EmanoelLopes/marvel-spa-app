import styled from 'styled-components';
import { media, sizes } from 'styles';

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
  height: 100vh;
  overflow: auto;
  width: 100vw;
`;
