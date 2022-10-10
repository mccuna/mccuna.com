import clsx from 'clsx';
import { FC } from 'react';
import { useExperienceEntry } from '../experience-entry-context';
import EntryBody from './entry-body';
import EntrySummary from './entry-summary';

type Props = {
  className?: string;
};

const ExperienceEntryCard: FC<Props> = ({ className }) => {
  const { isOpened } = useExperienceEntry();

  return (
    <details
      className={clsx('group cursor-pointer', className)}
      open={isOpened}>
      <EntrySummary />
      <EntryBody />
    </details>
  );
};

export default ExperienceEntryCard;
