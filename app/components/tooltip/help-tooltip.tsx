import clsx from 'clsx';
import { FC } from 'react';
import { QuestionMarkCircleIcon } from '../icons';
import { Tooltip, TooltipProps } from './tooltip';

export type HelpTooltipProps = {
  iconClassName: string;
} & TooltipProps;

export const HelpTooltip: FC<HelpTooltipProps> = ({
  iconClassName,
  titleClassName,
  title,
}) => {
  return (
    <Tooltip
      titleClassName={clsx(
        'p-2 rounded-md bg-indigo-500 text-slate-200',
        titleClassName,
      )}
      title={title}>
      <QuestionMarkCircleIcon
        className={clsx(
          'cursor-pointer text-indigo-500 hover:text-indigo-300',
          iconClassName,
        )}
      />
    </Tooltip>
  );
};
