import { FC } from 'react';

type Props = {
  filledPercentage: number;
  title?: string;
};

const ProgressBar: FC<Props> = ({ filledPercentage, title }) => {
  return (
    <div
      className='w-full h-3 border border-slate-700 bg-slate-600 rounded-full'
      title={title}>
      <div
        className={`h-full rounded-full bg-violet-500`}
        style={{ width: `${filledPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
