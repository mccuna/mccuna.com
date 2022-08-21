import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import Card from '~/components/card';

import { Skill } from '~/types/skill';

type Props = {
  category: Skill['category'];
  description: string;
  className?: string;
};

const SkillCategoryCard: FC<PropsWithChildren<Props>> = ({
  category,
  description,
  children,
  className,
}) => {
  return (
    <div className={clsx(className)}>
      <Card>
        <Card.Title className='text-2xl text-slate-200 capitalize'>
          {category}
        </Card.Title>
        <Card.Body className='flex flex-col gap-y-4'>
          <p>{description}</p>
          <hr className='w-full h border-slate-900' />
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillCategoryCard;
