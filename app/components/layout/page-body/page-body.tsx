import { FC, PropsWithChildren } from 'react';

const PageBody: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className='flex justify-center'>
      <div className='w-256'>{children}</div>
    </main>
  );
};

export default PageBody;
