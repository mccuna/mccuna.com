import clsx from 'clsx';
import { FC, PropsWithChildren, useMemo } from 'react';
import { CardContext } from './card-context';
import { CardVariant } from './types';

export type CardProps = {
  variant: CardVariant;
  className?: string;
};

export const CardRoot: FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
  variant,
}) => {
  const variantStyle = getVariantStyle(variant);

  const contextValue = useMemo(() => ({ variant }), [variant]);

  return (
    <CardContext.Provider value={contextValue}>
      <div className={clsx('border-2 rounded-lg p-3', variantStyle, className)}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

export const getVariantStyle = (variant: CardVariant): string => {
  switch (variant) {
    case 'default':
      return 'bg-slate-700 border-slate-700 text-slate-200';
    case 'success':
      return 'bg-green-500 text-white';
    default:
      throw new Error(`Unknown card variant: ${variant}`);
  }
};
