import { FC } from 'react';
import ProgressBar from '~/components/progress-bar';
import { Skill } from '~/types';
import { getImageCdnUrl } from '~/utils/cdn';

type Props = {
  skill: Skill;
};

const SkillLevel: FC<Props> = ({ skill }) => {
  return (
    <div className='flex flex-col gap-y-2 p-3'>
      <div className='flex gap-x-3 items-center'>
        <img
          src={getImageCdnUrl({
            imagePath: `skills/${skill.imagePath}`,
            variant: 'public',
          })}
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
  );
};

const getProgressBarFillForLevel = (level: Skill['level']): number => {
  switch (level) {
    case 'novice':
      return 30;
    case 'intermediate':
      return 70;
    case 'expert':
      return 95;
    default:
      throw new Error(`Invalid level: ${level}`);
  }
};

export default SkillLevel;
