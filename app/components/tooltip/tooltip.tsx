import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, PropsWithChildren, useState } from 'react';

export type TooltipProps = {
  title: string;
  titleClassName?: string;
};

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  title,
  titleClassName,
  children,
}) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  return (
    <div className='relative' onMouseLeave={() => setIsTitleVisible(false)}>
      <div
        onMouseEnter={() => setIsTitleVisible(true)}
        className='hover:scale-110'>
        {children}
      </div>
      <Transition
        show={isTitleVisible}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
        className='absolute bottom-full'>
        <div className={clsx('text-slate-200', titleClassName)}>{title}</div>
        <div className='relative h-3 w-3 translate-x-3/4 -translate-y-3/4 rotate-45 bg-indigo-500' />
      </Transition>
    </div>
  );
};
