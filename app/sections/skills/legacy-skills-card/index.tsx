import { FC } from 'react';
import Card from '~/components/card';
import { Skill } from '~/types';
import SkillCategoryCard from '../skill-category-card';
import SkillLevel from '../skill-level';

type Props = {
  skills: Skill[];
};

const LegacySkillsCard: FC<Props> = ({ skills }) => {
  const category: Skill['category'] = 'legacy';

  return (
    <SkillCategoryCard category={category}>
      <Card>
        <Card.Body className='flex flex-col divide-y divide-slate-900'>
          {skills.map((skill) => (
            <SkillLevel key={skill.name} skill={skill} />
          ))}
        </Card.Body>
      </Card>
    </SkillCategoryCard>
  );
};

export default LegacySkillsCard;
