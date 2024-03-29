import { Flex, Section } from '../../styles/Global';
import HeadingQuote from '../UI/HeadingQuote';

const Contacts = () => {
  return (
    <Section>
      <Flex justifyEnd>
        <HeadingQuote>
          <h2>Get in touch</h2>
          <p>
            I am always interested in anything related to the Web. <br />
            Whether you have a question or want to say hello. <br />
            Feel free to contact me.
          </p>
        </HeadingQuote>
      </Flex>
    </Section>
  );
};

export default Contacts;
