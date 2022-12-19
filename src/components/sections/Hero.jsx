import { animated, useSpring, useTrail } from '@react-spring/web';
import { Section } from '../../styles/Global';
import { Name, Title } from '../../styles/Hero';

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
      y: -70,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

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
