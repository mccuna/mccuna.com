import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import aboutMeIllustration from '/public/images/illustrations/about-me.svg';

const AboutMe = () => {
  return (
    <div>
      <HeadingAndIllustration
        title='Want to get in touch? Send me an email'
        subTitle="Send me a message. I'll reply in no time"
        illustrationSrc={aboutMeIllustration}
      />
    </div>
  );
};

export default AboutMe;
