import { FC } from 'react';
import Card from '~/components/card';
import ProgressBar from '~/components/progress-bar';
import { Skill } from '~/types/skill';

type Props = {
  category: string;
  skills: Skill[];
};

const CategorySkills: FC<Props> = ({ category, skills }) => {
  return (
    <div>
      <h2 className='text-lg text-slate-400'>{category}</h2>
      <Card>
        <Card.Body className='flex flex-col divide-y divide-slate-800'>
          {skills
            .sort(
              (firstEl, secondEl) => firstEl.orderIndex - secondEl.orderIndex,
            )
            .map((skill) => (
              <div
                key={skill.name}
                className='flex flex-col gap-y-2 py-3 first:pt-0 last:pb-0'>
                <div className='flex gap-x-3 items-center'>
                  <img
                    src={`/images/skills/${skill.imageHref}`}
                    alt={`${skill.name} logo`}
                  />
                  {skill.name}
                </div>
                <ProgressBar
                  percentage={getProgressBarFillForLevel(skill.level)}
                  title={skill.level}
                  className='col-span-2'
                />
              </div>
            ))}
        </Card.Body>
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
