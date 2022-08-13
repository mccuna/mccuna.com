import { Disclosure } from '@headlessui/react';
import { FC, useMemo } from 'react';
import {
  ExperienceEntry,
  ExperienceEntry as ExperienceEntryCard,
} from '~/types/experience-entry';
import EntryBody from './entry-body';
import EntrySummary from './entry-summary';
import { ExperienceEntryContext } from './experience-entry-context';

type Props = {
  experienceEntry: ExperienceEntry;
};

const ExperienceEntryCard: FC<Props> = ({ experienceEntry }) => {
  const contextValue = useMemo(() => {
    return { experienceEntry };
  }, [experienceEntry]);

  return (
    <ExperienceEntryContext.Provider value={contextValue}>
      <div className='group w-full xl:w-5/12 '>
        <Disclosure>
          <EntrySummary />
          <EntryBody />
        </Disclosure>
      </div>
    </ExperienceEntryContext.Provider>
  );
};

export default ExperienceEntryCard;
