import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useIsInViewport } from '~/utils/use-is-in-viewport';

type Props = {
  percentage: number;
  title?: string;
  className?: string;
};

const ProgressBar: FC<Props> = ({ percentage, title, className }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isInViewport, observer } = useIsInViewport(ref);
  /* By default, without triggering a re-render, the animation will
   * fire only when navigating to the page. If the page is accessed
   * directly by entering the URL in the browser address bar, the
   * animation will not fire.
   * Using an intermediary state solves this problem.
   */
  useEffect(() => {
    if (isInViewport) {
      setShowAnimation(true);
      /* We only care about the moment the progress
       * bar enter the viewport.
       */
      observer?.disconnect();
    }
  }, [isInViewport]);

  return (
    <div
      className={clsx(
        className,
        'w-full h-3 border border-slate-700 bg-slate-200 rounded-full',
      )}
      title={title}
      ref={ref}>
      <Transition
        show={showAnimation}
        as={Fragment}
        enter='transition-transform origin-left duration-1000 ease-in-out'
        enterFrom='scale-x-0'
        enterTo='scale-x-100'>
        <div
          className='h-full rounded-full bg-indigo-500'
          style={{ width: `${percentage}%` }}
        />
      </Transition>
    </div>
  );
};

export default ProgressBar;
