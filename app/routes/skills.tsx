import { useLoaderData } from '@remix-run/react';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import LegacySkillsCard from '~/sections/skills/legacy-skills-card';
import PrimarySkillsCard from '~/sections/skills/primary-skills-card';
import { getImageCdnUrl } from '~/utils/cdn';
import { loader } from './skills.loader';

export { meta } from './skills.meta';
export { loader };

const Skills = () => {
  const skillsPerCategory = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='What technologies have I worked with?'
        subTitle='Check below my skills'
        illustrationCdnPath={getImageCdnUrl({
          imagePath: `illustrations/skills.svg`,
          variant: 'public',
        })}
      />
      <div className='flex flex-col items-center gap-y-10'>
        <div className='flex flex-col w-full gap-y-10 md:w-2/3 lg:w-full  2xl:w-2/3'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <PrimarySkillsCard
              skills={skillsPerCategory.primary}
              className='lg:col-span-2'
            />
            <LegacySkillsCard skills={skillsPerCategory.legacy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
