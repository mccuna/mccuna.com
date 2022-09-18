import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, PropsWithChildren, useState } from 'react';
import { TooltipPlacement } from './tooltip-placement';

export type TooltipProps = {
  title: string;
  titleClassName?: string;
  tooltipPlacement?: TooltipPlacement;
};

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  title,
  titleClassName,
  children,
  tooltipPlacement: customTooltipPlacement,
}) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const tooltipPlacement = customTooltipPlacement ?? 'top';

  if (tooltipPlacement === 'top') {
    throw new Error("TODO: Implement 'top' style placement");
  }

  return (
    <div className='relative' onMouseLeave={() => setIsTitleVisible(false)}>
      <div onMouseEnter={() => setIsTitleVisible(true)}>{children}</div>
      <Transition
        show={isTitleVisible}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
        className={clsx('absolute flex flex-col', {
          'top-full': tooltipPlacement === 'bottom',
        })}>
        <div
          className={clsx(
            'text-slate-200 bg-slate-600 p-2 rounded-lg',
            titleClassName,
          )}>
          {title}
        </div>
        <div
          className={clsx(
            'relative h-3 w-3 left-1/3 translate-y-1/2 rotate-45 bg-slate-600',
            {
              '-order-1': tooltipPlacement === 'bottom',
            },
          )}
        />
      </Transition>
    </div>
  );
};
