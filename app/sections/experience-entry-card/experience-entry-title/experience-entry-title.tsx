import { FC, PropsWithChildren } from 'react';

const ExperienceEntryTitle: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <h3 className='text-slate-200 text-2xl'>{children}</h3>;
};

export default ExperienceEntryTitle;
