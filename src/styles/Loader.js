import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const LoaderBox = styled(animated.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to top,
    #a08bc4 0%,
    #febfc7 30%,
    #d8a2c4 55%,
    #7d74a1 97%
  );

  font-size: 10rem;
  // opacity: 0.3,
  position: absolute;
  z-index: 1000;
`;
