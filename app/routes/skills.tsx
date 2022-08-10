import { useLoaderData } from '@remix-run/react';
import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import CategorySkills from '~/sections/category-skills/category-skills';
import { loader } from './skills.loader';
import skillsIllustration from '/public/images/illustrations/skills.svg';

export { loader };

const Skills = () => {
  const skillsPerCategory = useLoaderData<typeof loader>();

  return (
    <div>
      {/* TODO: Update to use tailwind colors */}
      <HeadingAndIllustration
        title='What technologies have I worked with?'
        subTitle='Check below my skills'
        illustrationSrc={skillsIllustration}
      />
      <div className='flex justify-between grow gap-x-8'>
        {Object.entries(skillsPerCategory).map(([category, skills]) => (
          <CategorySkills
            key={category}
            category={category}
            skills={skills}
            className='basis-1/3'
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
