import { Flex, Section } from '../../styles/Global';
import HeadingQuote from '../ui/HeadingQuote';

const Contacts = () => {
  return (
    <Section>
      <Flex flexEnd>
        <HeadingQuote>
          <h2>Get in touch</h2>
          <p>
            I am always interested in anything related to the Web. <br />
            Whether you have a question or want to say hello. <br />I would glad
            to help you.
          </p>
        </HeadingQuote>
      </Flex>
    </Section>
  );
};

export default Contacts;
