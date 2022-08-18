import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';
import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import ExperienceArrowLeft from '~/sections/experience/experience-arrow-left/experience-arrow-left';
import ExperienceArrowRight from '~/sections/experience/experience-arrow-right/experience-arrow-right';
import ExperienceEntryCard from '~/sections/experience/experience-entry-card';
import { loader } from './experience.loader';
import experienceIllustration from '/public/images/illustrations/experience.svg';

export { loader };

const Experience: FC = () => {
  const experienceEntries = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the companies I've worked for"
        illustrationSrc={experienceIllustration}
      />
      <div className='flex flex-col gap-y-10'>
        {experienceEntries.map((experienceEntry) => (
          <div className='group flex gap-x-10 odd:flex-row even:flex-row-reverse'>
            <div className='xl:w-1/2'>
              <ExperienceEntryCard
                key={experienceEntry.refId}
                experienceEntry={experienceEntry}
              />
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
