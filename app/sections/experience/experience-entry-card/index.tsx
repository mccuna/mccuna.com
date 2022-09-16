import { FC } from 'react';
import { useExperienceEntry } from '../experience-entry-context';
import EntryBody from './entry-body';
import EntrySummary from './entry-summary';

const ExperienceEntryCard: FC = () => {
  const { isOpened } = useExperienceEntry();

  return (
    <details className='group  cursor-pointer' open={isOpened}>
      <EntrySummary />
      <EntryBody />
    </details>
  );
};

export default ExperienceEntryCard;
