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
      <div className='flex flex-col items-center gap-y-10'>
        <div className='prose prose-slate dark:prose-invert lg:prose-xl'>
          <p>
            I started as a .Net developer, but over time I've started to grow
            more and more into a Javascript developer. Now the moment has come
            to lay down my .Net skills and finally go all-in into Javascript.
          </p>
          {/* <p>
            Thus, primary skills are the skills that I'm further improving and
            I'm willing to work with in the future. Legacy skills on the other
            hand are skills that I've accumulated over the years and I'm not
            looking to further improve or work with in the future.
          </p> */}
        </div>
        <div className='w-full grid grid-cols-1 gap-8 md:w-2/3 lg:w-3/4 lg:grid-cols-2 2xl:w-2/3'>
          {Object.entries(skillsPerCategory).map(([category, skills]) => (
            <CategorySkills
              key={category}
              category={category}
              skills={skills}
            />
          ))}
        </div>
      </div>
      {/* TODO: Add favorite tech stack*/}
    </div>
  );
};

export default Skills;
