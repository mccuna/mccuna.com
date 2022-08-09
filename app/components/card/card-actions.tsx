import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CardActions: FC<Props> = ({ children }) => {
  return <div className='flex justify-between'>{children}</div>;
};
