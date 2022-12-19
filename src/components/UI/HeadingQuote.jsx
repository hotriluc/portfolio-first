import {
  animated,
  useInView,
  useSpring,
  useSpringRef,
  useTrail,
} from '@react-spring/web';
import { Children } from 'react';
import { Quote } from '../../styles/Global';

const HeadingQuote = ({ children }) => {
  const items = Children.toArray(children);

  const trailRef = useSpringRef();
  const trail = useTrail(items.length, {
    ref: trailRef,
    config: { tension: 500, friction: 200 },
    from: { opacity: 0, y: 45 },
    to: { opacity: 1, y: 0 },
  });

  const springRef = useSpringRef();
  const spring = useSpring({
    // config: { tension: 500, friction: 200 },
    ref: springRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const [ref, inView] = useInView({ rootMargin: '-40% 0%' });
  if (inView) {
    springRef.start();
    trailRef.start();
  }

  return (
    <>
      <Quote ref={ref} style={{ ...spring }}>
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            {items[index]}
          </animated.div>
        ))}
      </Quote>
    </>
  );
};

export default HeadingQuote;
