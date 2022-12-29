import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: ${(props) => props.gap || '4rem'};

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.justifyEnd &&
    css`
      justify-content: flex-end;
    `}
    
    ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    @media (max-width: 420px) {
    justify-content: flex-start;
  }
`;

export const Section = styled.section`
  height: ${(props) => props.height || '100vh'};
  padding: ${(props) => props.padding || '10rem 4rem 0 calc(160px + 2rem)'};

  @media (max-width: 992px) {
    padding: 5rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Quote = styled(animated.div)`
  max-width: 450px;
  min-width: 350px;
  border-left: 5px solid #fcfbf4;
  padding-left: 2rem;

  h2 {
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -1px;

    margin-bottom: 3.5rem;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
  }

  p {
    font-weight: 300;
    font-size: 2.8rem;
    line-height: 1.5;

    word-wrap: break-word;

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 1.6rem;
  }
`;

export const Highlight = styled.span`
  background-color: #a08bc4;
  /* background-color: #fbfbfb; */
  /* color: #101010; */
  padding: 0 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
