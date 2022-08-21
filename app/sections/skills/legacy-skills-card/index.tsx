import { FC } from 'react';
import { Skill } from '~/types';
import SkillCategoryCard from '../skill-category-card';
import SkillLevel from '../skill-level';

type Props = {
  skills: Skill[];
};

const LegacySkillsCard: FC<Props> = ({ skills }) => {
  const category: Skill['category'] = 'legacy';

  return (
    <SkillCategoryCard
      category={category}
      description="Skills that I've accumulated over the years and I'm not looking to further improve or work with in the future">
      <div className='flex flex-col divide-y divide-slate-900'>
        {skills.map((skill) => (
          <SkillLevel key={skill.name} skill={skill} />
        ))}
      </div>
    </SkillCategoryCard>
  );
};

export default LegacySkillsCard;
