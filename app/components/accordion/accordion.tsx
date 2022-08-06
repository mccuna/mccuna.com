import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type AccordionProps = {
  className?: string;
};

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  className,
  children,
}) => {
  return (
    <details className={clsx('p-3 cursor-pointer', className)}>
      {children}
    </details>
  );
};

type AccordionButtonProps = {
  className?: string;
};

const Summary: FC<PropsWithChildren<AccordionButtonProps>> = ({
  className,
  children,
}) => {
  return <summary className={clsx(className)}>{children}</summary>;
};

type AccordionPanelProps = {
  className?: string;
};

const Body: FC<PropsWithChildren<AccordionPanelProps>> = ({
  className,
  children,
}) => {
  return <div className={clsx(className)}>{children}</div>;
};

export default Object.assign(Accordion, { Summary, Body });
