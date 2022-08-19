import { Disclosure, Transition } from '@headlessui/react';
import { FC } from 'react';
import Card from '~/components/card';
import { useExperienceEntry } from '../experience-entry-context';
import CompanyInfo from './company-info';
import ProjectInfo from './project-info';

const EntryBody: FC = () => {
  const experienceEntry = useExperienceEntry();

  return (
    <Transition
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'>
      <Disclosure.Panel className='w-full'>
        {({ close }) => (
          <Card
            variant='primary'
            className='cursor-pointer rounded-t-none pt-0 group-hover:bg-indigo-700 group-hover:border-indigo-700'>
            <div className='flex flex-col gap-y-5' onClick={() => close()}>
              <ProjectInfo experienceEntry={experienceEntry} />
              <hr className='text-slate-200' />
              <CompanyInfo company={experienceEntry.company} />
            </div>
          </Card>
        )}
      </Disclosure.Panel>
    </Transition>
  );
};

export default EntryBody;
