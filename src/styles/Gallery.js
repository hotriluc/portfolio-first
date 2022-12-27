import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const GalleryItem = styled.div`
  div,
  p {
    font-size: inherit;
  }
`;

export const DetailWindow = styled.div`
  color: #101010;
  position: absolute;
  width: 65px;
  z-index: 12;
  height: 50px;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 5px;

  background: rgba(255, 255, 255, 0.9);
  border: 0.1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1px;

  & > *:not(:last-child) {
    margin-bottom: 2px;
  }
`;

export const DetailTitle = styled(animated.p)`
  text-transform: uppercase;
  font-size: 10px;
  width: 30px;
  line-height: 0.9;
`;

export const DetailDescription = styled(animated.p)`
  font-size: 3.5px;
  line-height: 1.1;
  width: 30px;
`;

export const DetailImage = styled(animated.div)`
  margin: 0;
  height: 33px;
  width: 28px;
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: -1;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    vertical-align: middle;
    transition: all 0.3s;
    object-fit: cover;

    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
  }

  img:hover {
    transform: scale(1.4);
    filter: none;
    -webkit-filter: none;
  }
`;

export const DetailButton = styled(animated.button)`
  border-style: none;
  background-color: #101010;
  color: #fbfbfb;
  font-size: 8px;
  position: absolute;

  a {
    padding: 2px 4px;
  }
`;
