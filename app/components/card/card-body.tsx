import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type CardBodyProps = {
  className?: string;
};

export const CardBody: FC<PropsWithChildren<CardBodyProps>> = ({
  children,
  className,
}) => {
  return <div className={clsx(className)}>{children}</div>;
};
