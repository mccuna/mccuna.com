import { useLoaderData } from '@remix-run/react';
import CategorySkills from '~/sections/category-skills/category-skills';
import { loader } from './skills.loader';
import skillsIllustration from '/public/images/illustrations/skills.svg';

export { loader };

const Skills = () => {
  const skillsPerCategory = useLoaderData<typeof loader>();

  return (
    <div className='w-full flex justify-between gap-x-28'>
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
      <img
        src={skillsIllustration}
        alt='Skills illustration'
        className='w-160 h-160'
      />
    </div>
  );
};

export default Skills;
