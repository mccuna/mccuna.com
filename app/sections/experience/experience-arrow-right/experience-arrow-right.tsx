import { FC } from 'react';
import ChevronRight from '~/components/icons/chevron-right';

const ExperienceArrowRight: FC = () => {
  return (
    <>
      <ChevronRight className='h-8 w-8 translate-y-1/2 translate-x-1/3 text-slate-200' />
      <div
        className='w-1/2 h-1/2 border-t-2 rounded-tl-full
   border-slate-200'
      />
    </>
  );
};

export default ExperienceArrowRight;
