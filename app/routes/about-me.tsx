import { HeadersFunction } from '@remix-run/cloudflare';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import MyJourney from '~/sections/about-me/my-journey';
import { getImageCdnUrl } from '~/utils/cdn';

export { meta } from './about-me.meta';

const AboutMe = () => {
  return (
    <div>
      <HeadingAndIllustration
        title="Hey, I'm Cristian Cună"
        subTitle="I'm a full stack developer passionate about building and developing stuff, always eager to learn new things."
        illustrationCdnPath={getImageCdnUrl({
          imagePath: `illustrations/about-me.svg`,
          variant: 'public',
        })}
      />
      <MyJourney />
    </div>
  );
};

export const headers: HeadersFunction = () => ({
  'Cache-Control': `public, max-age=${maxAge}, s-maxage=${sMaxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
});

const maxAge = 60 * 60; // 60 minutes
const sMaxAge = 90 * 24 * 60 * 60; // 90 days
const staleWhileRevalidate = 60; // 1 minute

export default AboutMe;
