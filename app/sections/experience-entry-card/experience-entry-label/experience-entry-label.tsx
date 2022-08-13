import { FC, PropsWithChildren } from 'react';

const ExperienceEntryLabel: FC<PropsWithChildren> = ({ children }) => {
  return <span className='text-slate-200 text-lg'>{children}</span>;
};

export default ExperienceEntryLabel;
