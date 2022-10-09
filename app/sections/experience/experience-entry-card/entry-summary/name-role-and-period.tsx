import clsx from 'clsx';
import { FC } from 'react';
import { CdnImage } from '~/components/image/cdn-image';
import { useExperienceEntry } from '../../experience-entry-context';

const NameRoleAndPeriod: FC = () => {
  const { experienceEntry } = useExperienceEntry();
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
        <p className='text-xl mt-1'>
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
        <p className='text-md mt-3'>{experienceEntry.description}</p>
      </div>
      <div className='flex justify-center items-center'>
        <CdnImage
          cdnPath={`experience/${experienceEntry.image.cdnPath}`}
          className='brightness-0 invert py-6 w-min lg:py-0 lg:max-h-12 xl:py-4 xl:max-h-16 2xl:max-h-24'
          alt={`${experienceEntry.name} logo`}
          width={experienceEntry.image.width}
          height={experienceEntry.image.height}
        />
      </div>
    </div>
  );
};

export default NameRoleAndPeriod;
