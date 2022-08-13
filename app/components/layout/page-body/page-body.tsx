import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type Props = {
  className: string;
};

const PageBody: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <main className={clsx('flex justify-center', className)}>
      <div className='w-10/12 sm:w-3/4'>{children}</div>
    </main>
  );
};

export default PageBody;
