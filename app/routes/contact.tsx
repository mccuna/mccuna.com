import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import contactIllustration from '/public/images/illustrations/contact.svg';

const Contact = () => {
  return (
    <div>
      <HeadingAndIllustration
        title='Want to get in touch? Send me an email'
        subTitle="Send me a message. I'll reply in no time"
        illustrationSrc={contactIllustration}
      />
    </div>
  );
};

export default Contact;
