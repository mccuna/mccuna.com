import { FC } from 'react';
import { ExperienceEntry } from '~/types/experience-entry';
import ExperienceEntryLabel from './experience-entry-label';

type Props = {
  experienceEntry: ExperienceEntry;
};

const ProjectInfo: FC<Props> = ({ experienceEntry }) => {
  return (
    <div className='flex flex-col gap-y-3'>
      <div>
        <ExperienceEntryLabel>Dev Team Size</ExperienceEntryLabel>:{' '}
        {experienceEntry.projectSize.devTeamMembers}
      </div>

      {experienceEntry.projectSize.numberOfUsers && (
        <div>
          <ExperienceEntryLabel>Number of users</ExperienceEntryLabel>:{' '}
          {experienceEntry.projectSize.numberOfUsers}
        </div>
      )}
      <div>
        <ExperienceEntryLabel>Accomplishments</ExperienceEntryLabel>:{' '}
        <ul className='list-disc'>
          {experienceEntry.accomplishments.map((accomplishment, index) => (
            //  The list items don't change so it's safe to use the index as a key
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className='ml-5 py-1'>
              {accomplishment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfo;
