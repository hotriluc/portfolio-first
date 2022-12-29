import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const Title = styled(animated.h2)`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1px;

  margin-top: 4rem;
  margin-bottom: 5rem;
  margin-left: 1.6rem;

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export const Name = styled(animated.h1)`
  font-weight: 600;
  font-size: 16rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -1rem;
  /* transform: rotate(180deg); */
  writing-mode: vertical-lr;

  a {
    display: inline-block;
  }

  @media (max-width: 420px) {
    font-size: 15rem;
  }
`;
