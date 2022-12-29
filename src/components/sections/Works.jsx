import { Highlight, Section } from '../../styles/Global';
import HeadingQuote from '../ui/HeadingQuote';

const Works = () => {
  return (
    <Section>
      <HeadingQuote>
        <h2>Works</h2>
        <p>
          Everything must be done <br />
          <Highlight>with care</Highlight> and <Highlight>attention</Highlight>.
          <br /> Here are some examples of my work.
        </p>
      </HeadingQuote>
    </Section>
  );
};

export default Works;
