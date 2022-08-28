import HeadingAndIllustration from '~/components/heading-and-illustration';
import MyJourney from '~/sections/about-me/my-journey';
import aboutMeIllustration from '/public/images/illustrations/about-me.svg';
import meImg from '/public/images/me.webp';

export { meta } from './about-me.meta';

const AboutMe = () => {
  return (
    <div>
      <HeadingAndIllustration
        title="Hey, I'm Cristian Cună"
        subTitle="I'm a full stack developer passionate about building and developing stuff always eager to learn new stuff."
        illustrationSrc={aboutMeIllustration}
      />
      <div className='flex gap-10'>
        <MyJourney />
        <div>
          <img src={meImg} alt='Cristian Cună' className='rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
