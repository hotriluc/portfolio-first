import {
  animated,
  useInView,
  useSpring,
  useSpringRef,
  useTrail,
} from '@react-spring/web';
import { Children } from 'react';

import classes from './HeadingQuote.module.css';

const HeadingQuote = ({ children }) => {
  const items = Children.toArray(children);

  const trailRef = useSpringRef();
  const trail = useTrail(items.length, {
    ref: trailRef,
    // config: { tension: 2000, friction: 200 },
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
  });

  const springRef = useSpringRef();
  const spring = useSpring({
    // config: { tension: 1000, friction: 200 },
    ref: springRef,
    from: {
      height: 0,
    },
    to: {
      height: 235,
    },
  });

  const [ref, inView] = useInView({ rootMargin: '-40% 0%' });

  if (inView) {
    springRef.start();
    trailRef.start();
  }

  return (
    <>
      <animated.div ref={ref} className={classes.quote} style={{ ...spring }}>
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            {items[index]}
          </animated.div>
        ))}
      </animated.div>
    </>
  );
};

export default HeadingQuote;
