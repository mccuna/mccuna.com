import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { FC } from 'react';
import Card from '~/components/card';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '~/components/icons';
import { useExperienceEntry } from '../experience-entry-context';
import NameRoleAndPeriod from './name-role-and-period';

const EntrySummary: FC = () => {
  const experienceEntry = useExperienceEntry();

  return (
    <Disclosure.Button className='text-left w-full'>
      {({ open }) => (
        <Card
          variant='primary'
          className={clsx(
            'h-full flex flex-col justify-between group-hover:bg-indigo-700 group-hover:border-indigo-700',
            open && 'rounded-b-none',
          )}>
          <div className='flex flex-col gap-y-6 xl:items-center'>
            <NameRoleAndPeriod />

            <div className='flex gap-2 flex-wrap text-base'>
              {experienceEntry.skillsNames.map((skillName) => (
                <div
                  key={skillName}
                  className='bg-slate-900 text-slate-200 rounded-lg px-2 py-1'>
                  {skillName}
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center text-slate-200  group-hover:animate-bounce'>
            {!open ? (
              <ChevronDoubleDownIcon className='h-6 w-6' />
            ) : (
              <ChevronDoubleUpIcon className='h-6 w-6' />
            )}
          </div>
        </Card>
      )}
    </Disclosure.Button>
  );
};

export default EntrySummary;
