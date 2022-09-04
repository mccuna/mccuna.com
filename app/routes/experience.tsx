import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import ExperienceArrowLeft from '~/sections/experience/experience-arrow-left';
import ExperienceArrowRight from '~/sections/experience/experience-arrow-right';
import ExperienceEntryCard from '~/sections/experience/experience-entry-card';
import { getImageCdnUrl } from '~/utils/cdn';
import { loader } from './experience.loader';

export { meta } from './experience.meta';
export { loader };

const Experience: FC = () => {
  const experienceEntries = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the companies I've worked for"
        illustrationCdnPath={getImageCdnUrl({
          imagePath: `illustrations/experience.svg`,
          variant: 'public',
        })}
      />
      <div className='flex flex-col gap-y-10'>
        {experienceEntries.map((experienceEntry) => (
          <div
            key={experienceEntry.refId}
            className='group flex gap-x-10 odd:flex-row even:flex-row-reverse'>
            <div className='xl:w-1/2'>
              <ExperienceEntryCard experienceEntry={experienceEntry} />
            </div>
            <div className='hidden group-last:!hidden group-odd:xl:flex w-1/2 flex-col xl:justify-end xl:items-start'>
              <ExperienceArrowLeft />
            </div>
            <div className='hidden group-last:!hidden group-even:xl:flex w-1/2 flex-col xl:justify-end xl:items-end'>
              <ExperienceArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
