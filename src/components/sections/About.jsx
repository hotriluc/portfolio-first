import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Flex, Highlight, Section } from '../../styles/Global';
import HeadingQuote from '../UI/HeadingQuote';

const About = () => {
  const { width } = useWindowDimensions();

  return (
    <Section height={width > 768 ? '220vh' : '205vh'}>
      <Flex column gap={width > 768 ? '20rem' : '15rem'}>
        <HeadingQuote>
          <h2>About</h2>
          <p>
            Hi. My name is <Highlight>Luc</Highlight>.
            <br />I am a <Highlight>web developer</Highlight> and sometimes a{' '}
            <Highlight>designer</Highlight>.
            <br />
            My main focus is creating <br />
            <Highlight>positive</Highlight> and <Highlight>immersive</Highlight>{' '}
            <Highlight>experience</Highlight> on the Web.
          </p>
        </HeadingQuote>

        <Flex justifyEnd>
          <HeadingQuote>
            <h2>A little bit more</h2>
            <p>
              I dived into the world of programming in 2015. A long story short:
              <br /> I did not like it at first. But during my studying what
              really caught my attention was the web development.
            </p>
          </HeadingQuote>
        </Flex>

        <HeadingQuote>
          <h2>Technologies</h2>
          <p>
            The goal of every project is to have{' '}
            <Highlight>well-designed</Highlight> application which at the same
            time look <Highlight>appealing</Highlight> and{' '}
            <Highlight>easy-to-use</Highlight>.
            <br />
            To achieve that I use the following technologies:
            <br />
            <Highlight>JavaScript</Highlight> <Highlight>TypeScript</Highlight>{' '}
            <Highlight>Ruby</Highlight> <Highlight>React</Highlight>{' '}
            <Highlight>ThreeJS</Highlight> <Highlight>RoR</Highlight>
          </p>
        </HeadingQuote>
      </Flex>
    </Section>
  );
};

export default About;
