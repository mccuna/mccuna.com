import clsx from 'clsx';
import { FC } from 'react';
import { useExperienceEntry } from '../experience-entry-context';

const NameRoleAndPeriod: FC = () => {
  const experienceEntry = useExperienceEntry();
  return (
    <div className='w-full flex flex-col gap-2 text-slate-200'>
      <div className='flex flex-col justify-between xl:flex-row'>
        <h3
          className={clsx(
            'flex-shrink text-3xl',
            experienceEntry.nda && 'italic',
          )}>
          {experienceEntry.name}{' '}
          {experienceEntry.nda && (
            <abbr className='text-sm' title='Non-disclosure agreement'>
              (NDA)
            </abbr>
          )}
        </h3>
        <span className='flex-shrink-0 text-lg xl:text-right'>
          {experienceEntry.fromYear === experienceEntry.toYear ? (
            <>{experienceEntry.fromYear}</>
          ) : (
            <>
              {experienceEntry.fromYear}
              {' - '}
              {experienceEntry.toYear}
            </>
          )}
        </span>
      </div>
      <p className='text-lg'>{experienceEntry.role} </p>
    </div>
  );
};

export default NameRoleAndPeriod;
