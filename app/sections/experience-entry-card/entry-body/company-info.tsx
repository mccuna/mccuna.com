import { FC } from 'react';
import { ExperienceEntry } from '~/types/experience-entry';
import ExperienceEntryLabel from './experience-entry-label';

type Props = {
  company: ExperienceEntry['company'];
};

const CompanyInfo: FC<Props> = ({ company }) => {
  return (
    <div className='flex flex-col gap-y-3'>
      <h3 className='text-slate-200 text-2xl'>Company</h3>
      {company?.name && (
        <div>
          <ExperienceEntryLabel>Name</ExperienceEntryLabel>: {company.name}
        </div>
      )}
      {company?.description && (
        <div>
          <ExperienceEntryLabel>Short description</ExperienceEntryLabel>:{' '}
          {company.description}
        </div>
      )}
      {company?.websiteHref && (
        <div>
          <ExperienceEntryLabel>Website:</ExperienceEntryLabel>{' '}
          <span className='text-indigo-300 cursor-pointer underline-on-hover'>
            {company?.websiteHref}
          </span>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
