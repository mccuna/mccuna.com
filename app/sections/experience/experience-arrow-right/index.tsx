import clsx from 'clsx';
import { FC } from 'react';
import { ChevronRightIcon } from '~/components/icons';
import { useExperienceEntry } from '../experience-entry-context';

const ExperienceArrowRight: FC = () => {
  const { isOpened } = useExperienceEntry();
  return (
    <>
      <ChevronRightIcon className='h-8 w-8 translate-y-1/2 translate-x-1/3 text-slate-200' />
      <div
        className={clsx(
          'w-1/2 h-1/2 border-t-2 rounded-tl-full border-slate-200',
          {
            'border-l': isOpened,
          },
        )}
      />
    </>
  );
};

export default ExperienceArrowRight;
