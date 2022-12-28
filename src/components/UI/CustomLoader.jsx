import { useEffect } from 'react';

import {
  useTrail,
  animated,
  useSpring,
  useSpringRef,
  useChain,
} from '@react-spring/web';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { LoaderBox } from '../../styles/Loader';

const CustomLoader = ({ text, timeOut }) => {
  const dispatch = useDispatch();
  const trailRef = useSpringRef();
  const trail = useTrail(text.length, {
    ref: trailRef,
    from: {
      opacity: 0,
      y: -60,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    reverse: true,
  });

  const springRef = useSpringRef();
  const spring = useSpring({
    ref: springRef,
    from: {
      scaleX: 1,
      opacity: 1,
    },
    to: {
      scaleX: 0,
      opacity: 0,
    },
    config: { tension: 500, friction: 200 },
  });

  const chainArray = [trailRef, springRef];
  useChain(chainArray, [0, timeOut || 1.5]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.setIsLoaded());
    }, chainArray.length * (timeOut || 1.5) * 1000);
  }, []);

  return (
    <LoaderBox
      style={{
        ...spring,
      }}
    >
      <div>
        {trail.map((props, index) => (
          <animated.a key={index} style={{ display: 'inline-block', ...props }}>
            {text[index]}
          </animated.a>
        ))}
      </div>
    </LoaderBox>
  );
};

export default CustomLoader;
