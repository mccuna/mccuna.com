import { useLoaderData } from '@remix-run/react';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import CategorySkills from '~/sections/category-skills';
import { loader } from './skills.loader';
import skillsIllustration from '/public/images/illustrations/skills.svg';

export { loader };

const Skills = () => {
  const skillsPerCategory = useLoaderData<typeof loader>();

  return (
    <div>
      <HeadingAndIllustration
        title='What technologies have I worked with?'
        subTitle='Check below my skills'
        illustrationSrc={skillsIllustration}
      />
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 '>
        {Object.entries(skillsPerCategory).map(([category, skills]) => (
          <CategorySkills key={category} category={category} skills={skills} />
        ))}
      </div>
      {/* TODO: Add favorite tech stack*/}
    </div>
  );
};

export default Skills;
