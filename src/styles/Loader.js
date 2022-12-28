import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const LoaderBox = styled(animated.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7d74a1;
  font-size: 10rem;
  // opacity: 0.3,
  position: absolute;
  z-index: 1000;
`;
