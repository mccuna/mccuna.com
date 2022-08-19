import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FC, Fragment, useEffect, useState } from 'react';

type Props = {
  percentage: number;
  title?: string;
  className?: string;
};

const ProgressBar: FC<Props> = ({ percentage, title, className }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  /* By default, without triggering a re-render, the animation will
   * fire only when navigating to the page. If the page is accessed
   * directly by entering the URL in the browser address bar, the
   * animation will not fire.
   * Using an intermediary state solves this problem.
   */
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div
      className={clsx(
        className,
        'w-full h-3 border border-slate-700 bg-slate-500 rounded-full',
      )}
      title={title}>
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
