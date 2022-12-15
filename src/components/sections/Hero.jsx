import { animated, useSpring, useTrail } from '@react-spring/web';

import classes from './Hero.module.css';

export const Hero = () => {
  const name = 'Luc.Ho';

  const trail = useTrail(name.length, {
    from: {
      opacity: 0,
      x: 45,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  });

  const titleSpring = useSpring({
    from: {
      opacity: 0,
      y: -50,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  return (
    <section className={classes.hero}>
      <animated.h1 className={classes.title} style={{ ...titleSpring }}>
        From designing to creating <br />
        positive UI and UX
      </animated.h1>

      <animated.h2 className={classes.name}>
        {trail.map((props, index) => (
          <animated.a key={index} style={props}>
            {name[index]}
          </animated.a>
        ))}
      </animated.h2>
    </section>
  );
};

export default Hero;
