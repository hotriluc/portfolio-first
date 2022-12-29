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
    #7d74a1 0%,
    #d8a2c4 17%,
    #febfc7 33%,
    #a08bc4 97%
  );

  font-size: 10rem;
  // opacity: 0.3,
  position: absolute;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 8.5rem;
  }

  @media (max-width: 420px) {
    font-size: 8.5rem;
  }
`;
