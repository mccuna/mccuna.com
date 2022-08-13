import { FC } from 'react';
import Card from '~/components/card';
import ProgressBar from '~/components/progress-bar/progress-bar';
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
      <Card className='divide-y divide-slate-800'>
        {skills.map((skill) => (
          <div key={skill.name} className='py-3 first:pt-0 last:pb-0'>
            <div className='flex flex-col justify-between'>
              {skill.name}
              <ProgressBar
                filledPercentage={getProgressBarFillForLevel(skill.level)}
                title={skill.level}
              />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

const getProgressBarFillForLevel = (level: Skill['level']): number => {
  switch (level) {
    case 'novice':
      return 30;
    case 'intermediate':
      return 60;
    case 'expert':
      return 90;
    default:
      throw new Error(`Invalid level: ${level}`);
  }
};

export default CategorySkills;
