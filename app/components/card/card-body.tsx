import { FC, PropsWithChildren } from 'react';

export const CardBody: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className='py-3'>{children}</div>;
};
