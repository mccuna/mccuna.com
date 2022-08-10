import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import homeIllustration from '/public/images/illustrations/home.svg';

const Index = () => {
  return (
    <div>
      {/* TODO: Update to use tailwind colors */}
      <HeadingAndIllustration
        title='Want to get in touch? Send me an email'
        subTitle="Send me a message. I'll reply in no time"
        illustrationSrc={homeIllustration}
      />
    </div>
  );
};

export default Index;
