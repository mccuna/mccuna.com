import { Transition } from '@headlessui/react';
import { FC } from 'react';
import Card from '~/components/card';
import { useExperienceEntry } from '../../experience-entry-context';

import CompanyInfo from './company-info';
import ProjectInfo from './project-info';

const EntryBody: FC = () => {
  const { experienceEntry, toggleOpenState, isOpened } = useExperienceEntry();

  return (
    <Transition
      show={isOpened}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'>
      <div>
        <Card
          variant='primary'
          className='rounded-t-none pt-0 group-hover:bg-indigo-700 group-hover:border-indigo-700'>
          <button
            type='button'
            className='flex flex-col gap-y-5 text-left'
            onClick={() => toggleOpenState()}>
            <ProjectInfo experienceEntry={experienceEntry} />
            <hr className='text-slate-200' />
            <CompanyInfo company={experienceEntry.company} />
          </button>
        </Card>
      </div>
    </Transition>
  );
};

export default EntryBody;
