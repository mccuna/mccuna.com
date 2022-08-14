import { FC, PropsWithChildren } from 'react';
import Footer from './footer/footer';
import PageBody from './page-body/page-body';
import TopNavigation from './top-navigation';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-between gap-y-8 lg:gap-y-24'>
      <TopNavigation />
      <PageBody className='grow '>{children}</PageBody>
      <Footer />
    </div>
  );
};

export default Layout;
