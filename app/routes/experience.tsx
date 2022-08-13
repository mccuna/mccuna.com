import { useLoaderData } from '@remix-run/react';
import { FC } from 'react';
import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import ExperienceEntryCard from '~/sections/experience-entry-card/experience-entry-card';
import { loader } from './experience.loader';
import experienceIllustration from '/public/images/illustrations/experience.svg';

export { loader };

const Experience: FC = () => {
  const experienceEntries = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='To what cool projects have I contributed?'
        subTitle="Here are the things I've helped build"
        illustrationSrc={experienceIllustration}
      />
      <div className='flex flex-col gap-y-10 xl:flex-row xl:flex-wrap xl:gap-x-10 xl:justify-center xl:items-center'>
        {experienceEntries.map((experienceEntry) => (
          <ExperienceEntryCard
            key={experienceEntry.refId}
            experienceEntry={experienceEntry}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
