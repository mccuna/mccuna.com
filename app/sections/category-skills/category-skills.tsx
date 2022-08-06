import { FC } from 'react';
import Accordion from '~/components/accordion/accordion';
import { Skill } from '~/types/skill';

type Props = {
  category: string;
  skills: Skill[];
  className: string;
};

const CategorySkills: FC<Props> = ({ category, skills, className }) => {
  return (
    <div className={className}>
      <h2 className='text-lg text-slate-400 my-2'>{category}</h2>
      <div className='border border-slate-700 rounded-md divide-y divide-slate-900'>
        {skills.map((skill) => (
          <Accordion key={skill.name} className='text-slate-200 bg-slate-700'>
            <Accordion.Summary className='flex'>{skill.name}</Accordion.Summary>
            <Accordion.Body>
              <p>{skill.level}</p>
              <p>{skill.category}</p>
            </Accordion.Body>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default CategorySkills;
