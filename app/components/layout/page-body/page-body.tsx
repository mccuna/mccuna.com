import { FC, PropsWithChildren } from 'react';

const PageBody: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <main>{children}</main>;
};

export default PageBody;
