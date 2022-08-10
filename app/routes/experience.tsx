import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import experienceIllustration from '/public/images/illustrations/experience.svg';

const Experience = () => {
  return (
    <div>
      {/* TODO: Update to use tailwind colors */}
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the things I've helped build"
        illustrationSrc={experienceIllustration}
      />
    </div>
  );
};

export default Experience;
