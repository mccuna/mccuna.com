import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const LocalTime: FC<Props> = ({ className }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000); // every minute in milliseconds

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <span className={clsx(className)}>
      {currentTime.toLocaleString('ro-RO', {
        timeStyle: 'short',
        hour12: true,
      })}
    </span>
  );
};

export default LocalTime;
