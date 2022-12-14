import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useState } from 'react';
import { MenuIcon, XIcon } from '~/components/icons';
import { routeHrefs } from '~/constants/routes-hrefs';
import XsScreenLinksMenu from './xs-screen-links-menu';
import XsScreenNavigationLink from './xs-screen-navigation-link';

const XsScreenNavigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);

  return (
    <div className='flex items-center lg:hidden'>
      {!isOpen && (
        <button
          type='button'
          aria-label='Burger menu'
          onClick={() => setIsOpen(true)}
          className='px-2'>
          <MenuIcon className='h-8 w-8 text-slate-200' />
        </button>
      )}

      {isOpen && (
        <button
          type='button'
          onClick={closeDialog}
          className='relative z-10 right-0 px-2'>
          <XIcon className='h-8 w-8 text-slate-200' />
        </button>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative' onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-slate-900' />
          </Transition.Child>

          <div className='fixed top-16 left-0 right-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel>
                <ul className='flex flex-col gap-y-6 ml-6'>
                  <XsScreenNavigationLink
                    to={routeHrefs.home}
                    onClick={closeDialog}>
                    Home
                  </XsScreenNavigationLink>
                  <li className='text-3xl text-slate-700'>
                    Blog (coming soon)
                  </li>
                  <XsScreenLinksMenu
                    menuName='About me'
                    links={[
                      {
                        text: 'My journey',
                        to: routeHrefs.aboutMe.myJourney,
                      },
                      {
                        text: 'Skills',
                        to: routeHrefs.aboutMe.skills,
                      },
                      {
                        text: 'Experience',
                        to: routeHrefs.aboutMe.experience,
                      },
                    ]}
                    onClick={closeDialog}
                  />
                  <XsScreenNavigationLink
                    to={routeHrefs.contact}
                    onClick={closeDialog}>
                    Contact
                  </XsScreenNavigationLink>
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default XsScreenNavigation;
