import HeadingAndIllustration from '~/components/heading-and-illustration';
import MyJourney from '~/sections/about-me/my-journey';
import { getImageCdnUrl } from '~/utils/cdn';

export { meta } from './about-me.meta';

const AboutMe = () => {
  return (
    <div>
      <HeadingAndIllustration
        title="Hey, I'm Cristian Cună"
        subTitle="I'm a full stack developer passionate about building and developing stuff always eager to learn new stuff."
        illustrationCdnPath={getImageCdnUrl({
          imagePath: `illustrations/about-me.svg`,
          variant: 'public',
        })}
      />
      <MyJourney />
    </div>
  );
};

export default AboutMe;
