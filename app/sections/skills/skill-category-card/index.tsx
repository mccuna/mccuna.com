import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { HelpTooltip } from '~/components/tooltip';

import { Skill } from '~/types/skill';

type Props = {
  category: Skill['category'];
  className?: string;
};

const SkillCategoryCard: FC<PropsWithChildren<Props>> = ({
  category,
  children,
  className,
}) => {
  return (
    <div className={clsx(className)}>
      <div className='flex items-center gap-x-1'>
        <h2 className='text-lg text-slate-400'>{category}</h2>
        <HelpTooltip
          iconClassName='w-6 h-6'
          titleClassName='w-56 '
          title={categoryTooltips[category]}
        />
      </div>
      {children}
    </div>
  );
};

const categoryTooltips: Record<Skill['category'], string> = {
  primary:
    "Skills that I'm further improving and I'm looking forward to working with in the future",
  legacy:
    "Skills that I've accumulated over the years and I'm not looking to further improve or work with in the future",
};

export default SkillCategoryCard;
