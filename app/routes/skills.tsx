import { useLoaderData } from '@remix-run/react';
import CategorySkills from '~/sections/category-skills/category-skills';
import { loader } from './skills.loader';
import skillsIllustration from '/public/images/illustrations/skills.svg';

export { loader };

const Skills = () => {
  const skillsPerCategory = useLoaderData<typeof loader>();

  return (
    <div>
      <div className='w-full flex justify-center gap-x-24'>
        <div className='flex flex-col gap-y-5 max-w-lg'>
          <h1 className='text-5xl text-slate-200'>
            What technologies have I worked with?
          </h1>
          <p className='text-4xl text-slate-400'>Check below my skills</p>
        </div>
        <img
          src={skillsIllustration}
          alt='Skills illustration'
          className='w-160 h-160'
        />
      </div>
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
