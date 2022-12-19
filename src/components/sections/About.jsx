import { Highlight, Section } from '../../styles/Global';
import HeadingQuote from '../ui/HeadingQuote';

const About = () => {
  return (
    <Section height="200vh">
      <HeadingQuote>
        <h2>01.About</h2>
        <p>
          Hi. My name is Luc. <br />I am focusing on creating{' '}
          <Highlight>positive</Highlight> and <Highlight>immersive</Highlight>{' '}
          experience on the Web.
        </p>
      </HeadingQuote>
    </Section>
  );
};

export default About;
