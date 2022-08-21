import { FC } from 'react';
import { Skill } from '~/types';
import SkillCategoryCard from '../skill-category-card';
import SkillLevel from '../skill-level';

type Props = {
  skills: Skill[];
  className: string;
};

const PrimarySkillsCard: FC<Props> = ({ skills, className }) => {
  const category: Skill['category'] = 'primary';

  const chunkSize = 4;

  const skillsChunks = skills.reduce((resultArray, skill, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(skill);

    return resultArray;
  }, [] as Skill[][]);

  return (
    <SkillCategoryCard
      category={category}
      description="Skills that I'm further improving and I'm looking forward to working with in the future"
      className={className}>
      <div className='flex flex-col divide-slate-900 lg:flex-row lg:divide-x'>
        {skillsChunks.map((skillChunk, index) => (
          <div
            key={index}
            className='grow divide-y divide-slate-900 lg:px-4 lg:first:pl-0 lg:last:pr-0'>
            {skillChunk.map((skill) => (
              <SkillLevel key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </SkillCategoryCard>
  );
};

export default PrimarySkillsCard;
