import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { useCardContext } from './card-context';
import { CardVariant } from './types';

type Props = {
  children: ReactNode;
  className?: string;
};

export const CardTitle: FC<Props> = ({ children, className }) => {
  const { variant } = useCardContext();

  const variantStyle = getVariantStyle(variant);

  return (
    <h3 className={clsx(variantStyle, className, 'text-3xl')}>{children}</h3>
  );
};

const getVariantStyle = (variant: CardVariant): string => {
  switch (variant) {
    case 'default':
      return 'text-slate-200';
    case 'success':
      return 'text-slate-200';
    default:
      throw new Error(`Unknown card variant: ${variant}`);
  }
};
