import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import experienceIllustration from '/public/images/illustrations/experience.svg';

const Experience = () => {
  return (
    <div>
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the things I've helped build"
        illustrationSrc={experienceIllustration}
      />
    </div>
  );
};

export default Experience;
