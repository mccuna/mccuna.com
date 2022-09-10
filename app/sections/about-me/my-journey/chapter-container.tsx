import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const ChapterContainer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'prose prose-slate dark:prose-invert lg:prose-xl',
        className,
      )}>
      {children}
    </div>
  );
};

export default ChapterContainer;
