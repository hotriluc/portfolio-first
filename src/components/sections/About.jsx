import HeadingQuote from '../ui/HeadingQuote';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.about}>
      <HeadingQuote>
        <h2>01.About</h2>
        <p>
          Hi. My name is Luc. I am creating immersive and positive experience
          for Web.
        </p>
      </HeadingQuote>
    </section>
  );
};

export default About;
