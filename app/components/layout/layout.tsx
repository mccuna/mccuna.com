import { FC, PropsWithChildren } from 'react';
import Footer from './footer/footer';
import PageBody from './page-body/page-body';
import TopNavigation from './top-navigation/top-navigation';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <TopNavigation />
      <PageBody>{children}</PageBody>
      <Footer />
    </div>
  );
};

export default Layout;
