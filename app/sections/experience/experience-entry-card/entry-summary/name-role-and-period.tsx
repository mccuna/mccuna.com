import clsx from 'clsx';
import { FC } from 'react';
import { useExperienceEntry } from '../experience-entry-context';

const NameRoleAndPeriod: FC = () => {
  const experienceEntry = useExperienceEntry();
  return (
    <div className='w-full flex flex-col justify-between gap-x-4 text-slate-200 lg:flex-row xl:flex-col 2xl:flex-row'>
      <div>
        <h3 className={clsx('text-3xl', experienceEntry.nda && 'italic')}>
          {experienceEntry.name}{' '}
          {experienceEntry.nda && (
            <abbr className='text-sm' title='Non-disclosure agreement'>
              (NDA)
            </abbr>
          )}
        </h3>
        <p className='text-lg'>
          {experienceEntry.role}{' '}
          <span className='xl:block'>
            {experienceEntry.fromYear === experienceEntry.toYear ? (
              <>({experienceEntry.fromYear})</>
            ) : (
              <>
                ({experienceEntry.fromYear}
                {' - '}
                {experienceEntry.toYear})
              </>
            )}
          </span>
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src={`/images/experience/${experienceEntry.image}`}
          className='brightness-0 invert hue-rotate-60 py-6 w-fit max-h-20 sm:max-h-24 lg:py-0 lg:max-h-12 xl:py-4 xl:max-h-20'
          alt={`${experienceEntry.name} logo`}
        />
      </div>
    </div>
  );
};

export default NameRoleAndPeriod;
