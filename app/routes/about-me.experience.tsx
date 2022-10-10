import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import ExperienceArrowLeft from '~/sections/experience/experience-arrow-left';
import ExperienceArrowRight from '~/sections/experience/experience-arrow-right';
import ExperienceEntryCard from '~/sections/experience/experience-entry-card';
import { ExperienceEntryContextProvider } from '~/sections/experience/experience-entry-context';
import { loader } from './about-me.experience.loader';

export { meta } from './about-me.experience.meta';
export { loader };

const Experience: FC = () => {
  const experienceEntries = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the companies I've worked for"
        illustration={{
          cdnPath: 'illustrations/experience.svg',
          width: 850,
          height: 740,
        }}
      />
      <div className='flex flex-col gap-y-10'>
        {experienceEntries.map((experienceEntry, index) => (
          <ExperienceEntryContextProvider
            experienceEntry={experienceEntry}
            key={experienceEntry.refId}>
            <div className='flex gap-x-10 odd:flex-row even:flex-row-reverse '>
              <ExperienceEntryCard className='w-full xl:w-1/2' />
              {index % 2 === 0 && index !== experienceEntries.length - 1 && (
                <div className='hidden w-1/2 xl:flex xl:flex-col xl:justify-end xl:items-start'>
                  <ExperienceArrowLeft />
                </div>
              )}
              {index % 2 !== 0 && index !== experienceEntries.length - 1 && (
                <div className='hidden w-1/2 xl:flex xl:flex-col xl:justify-end xl:items-end'>
                  <ExperienceArrowRight />
                </div>
              )}
            </div>
          </ExperienceEntryContextProvider>
        ))}
      </div>
    </div>
  );
};

export default Experience;
