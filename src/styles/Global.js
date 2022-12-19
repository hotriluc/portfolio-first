import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
`;

export const Section = styled.section`
  height: ${(props) => props.height || '100vh'};
  padding: ${(props) => props.padding};
`;

export const Quote = styled(animated.div)`
  max-width: 450px;
  min-width: 350px;
  border-left: 5px solid white;
  padding-left: 2rem;

  h2 {
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -1px;

    margin-bottom: 3.5rem;
  }

  p {
    font-weight: 300;
    font-size: 2.8rem;

    word-wrap: break-word;
  }
`;

export const Highlight = styled.span`
  background-color: #a08bc4;
`;