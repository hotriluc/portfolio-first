import { animated, useSpring, useSpringRef, useTrail } from '@react-spring/web';
import { useEffect } from 'react';
import { Section } from '../../styles/Global';
import { Name, Title } from '../../styles/Hero';

export const Hero = ({ isLoaded }) => {
  const name = 'Luc.Ho';

  const trailSpringRef = useSpringRef();
  const trail = useTrail(name.length, {
    ref: trailSpringRef,
    from: {
      opacity: 0,
      x: 45,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    // config: { tension: 500, friction: 200 },
  });

  const titleSpringRef = useSpringRef();
  const titleSpring = useSpring({
    ref: titleSpringRef,
    from: {
      opacity: 0,
      y: -70,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { tension: 500, friction: 200 },
  });

  useEffect(() => {
    if (isLoaded) {
      trailSpringRef.start();
      titleSpringRef.start();
    }
  }, [isLoaded]);

  return (
    <Section padding="2rem 4rem">
      <Title style={{ ...titleSpring }}>
        From designing to creating <br />
        positive Web experience.
      </Title>

      <Name>
        {trail.map((props, index) => (
          <animated.a key={index} style={props}>
            {name[index]}
          </animated.a>
        ))}
      </Name>
    </Section>
  );
};

export default Hero;
