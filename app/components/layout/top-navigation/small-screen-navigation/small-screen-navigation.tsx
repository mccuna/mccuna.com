import { Menu, Transition } from '@headlessui/react';
import { FC } from 'react';
import { MenuIcon, XIcon } from '~/components/icons';
import { routeHrefs } from '~/utils/routes-hrefs';
import SmallScreenNavigationLink from './small-screen-navigation-link/small-screen-navigation-link';

const SmallScreenNavigation: FC = () => {
  return (
    <div className='lg:hidden relative'>
      <Menu>
        {({ open }) => (
          <>
            {/* backdrop */}
            <Transition
              show={open}
              className='inset-0 fixed backdrop-blur-sm'
              enter='transform transition duration-200'
              enterFrom='opacity-0 scale-50'
              enterTo='opacity-100 scale-100'
              leave='transform transition duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-50'
            />

            <Menu.Button className='relative z-50 border-2 border-slate-400 rounded-md'>
              <Transition
                show={!open}
                enter='transform transition duration-500 ease-out'
                enterFrom='opacity-0 scale-50'
                enterTo='opacity-100 scale-100'
                leave='hidden'>
                <MenuIcon className='h-8 w-8 p-1 text-slate-400' />
              </Transition>

              <Transition
                show={open}
                enter='transform transition duration-500'
                enterFrom='opacity-0 scale-50'
                enterTo='opacity-100 scale-100'
                leave='hidden'>
                <XIcon className='h-8 w-8 p-1 text-slate-400' />
              </Transition>
            </Menu.Button>
            <Transition
              enter='transform transition duration-500 ease-out'
              enterFrom='scale-95 opacity-0'
              enterTo='scale-100 opacity-100'
              leave='transform transition duration-300 ease-out'
              leaveFrom='scale-100 opacity-100'
              leaveTo='scale-95 opacity-0'
              className='absolute z-50 right-0 w-60'>
              <Menu.Items className='py-2 flex flex-col border-2 rounded-md bg-slate-900'>
                <SmallScreenNavigationLink to={routeHrefs.home}>
                  Home
                </SmallScreenNavigationLink>
                <SmallScreenNavigationLink to={routeHrefs.skills}>
                  Skills
                </SmallScreenNavigationLink>
                <SmallScreenNavigationLink to={routeHrefs.experience}>
                  Experience
                </SmallScreenNavigationLink>
                <SmallScreenNavigationLink to={routeHrefs.aboutMe}>
                  About me
                </SmallScreenNavigationLink>
                <SmallScreenNavigationLink to={routeHrefs.contact}>
                  Contact
                </SmallScreenNavigationLink>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default SmallScreenNavigation;
