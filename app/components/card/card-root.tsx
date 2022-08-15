import clsx from 'clsx';
import { forwardRef, PropsWithChildren, useMemo } from 'react';
import { CardContext } from './card-context';
import { CardVariant } from './types';

export type CardProps = {
  variant?: CardVariant;
  className?: string;
};

export const CardRoot = forwardRef<
  HTMLDivElement,
  PropsWithChildren<CardProps>
>(({ children, className, variant: customVariant }, ref) => {
  const variant = customVariant ?? 'default';
  const variantStyle = getVariantStyle(variant);

  const contextValue = useMemo(() => ({ variant }), [variant]);

  return (
    <CardContext.Provider value={contextValue}>
      <div
        className={clsx(
          'flex flex-col gap-y-5 border-2 rounded-lg p-6',
          variantStyle,
          className,
        )}
        ref={ref}>
        {children}
      </div>
    </CardContext.Provider>
  );
});

export const getVariantStyle = (variant: CardVariant): string => {
  switch (variant) {
    case 'default':
      return 'bg-slate-700 border-slate-700 text-slate-200';
    case 'success':
      return 'bg-green-600 border-green-600 text-slate-200';
    case 'primary':
      return 'bg-indigo-900 border-indigo-900 text-slate-200';
    default:
      throw new Error(`Unknown card variant: ${variant}`);
  }
};
