import { FC } from 'react';
import Card from '~/components/card';
import { ExperienceEntry as ExperienceEntryCard } from '~/types/experience-entry';
import CompanyInfo from './company-info/company-info';
import ProjectInfo from './project-info/project-info';

type Props = {
  experienceEntry: ExperienceEntryCard;
};

const ExperienceEntryCard: FC<Props> = ({ experienceEntry }) => {
  return (
    <Card className='xl:w-5/12'>
      <Card.Title className='flex flex-col items-center gap-y-4 md:gap-y-6'>
        <img
          src={`/images/experience/companies/${experienceEntry.imageName}`}
          alt={experienceEntry.name}
          className='w-full sm:w-10/12 md:w-3/4 lg:w-7/12'
        />
        <div className='w-full'>
          {experienceEntry.name}{' '}
          <p className='text-lg'>
            {experienceEntry.fromYear === experienceEntry.toYear ? (
              <>({experienceEntry.fromYear})</>
            ) : (
              <>
                ({experienceEntry.fromYear}
                {' - '}
                {experienceEntry.toYear})
              </>
            )}
          </p>
        </div>
      </Card.Title>
      <Card.Body className='flex flex-col gap-y-5'>
        <ProjectInfo experienceEntry={experienceEntry} />
        <hr className='text-slate-200' />
        <CompanyInfo company={experienceEntry.company} />
      </Card.Body>
    </Card>
  );
};

export default ExperienceEntryCard;
