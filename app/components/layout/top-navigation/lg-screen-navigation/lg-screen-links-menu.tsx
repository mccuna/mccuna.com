import { Popover } from '@headlessui/react';
import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { FC } from 'react';
import { ChevronDownIcon } from '~/components/icons/chevron-down-icon';

type Props = {
  buttonText: string;
  links: {
    to: string;
    text: string;
  }[];
};

const LgScreenLinksMenu: FC<Props> = ({ buttonText, links }) => {
  const { pathname } = useLocation();
  const isMenuActive = links.some((link) => link.to === pathname);

  return (
    <li>
      <Popover className='relative w-full px-6 py-3'>
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(
                'flex items-center gap-x-1 text-xl',
                isMenuActive
                  ? 'text-indigo-500 hover:text-indigo-300'
                  : 'text-slate-400 hover:text-slate-200',
                !open && 'underline-on-hover ',
              )}>
              {buttonText}
              <ChevronDownIcon className='h-8 w-8' />
            </Popover.Button>

            <Popover.Panel className='absolute top-3/4 flex flex-col w-max p-2 bg-slate-700 rounded-md divide-y divide-slate-900'>
              {links.map((link) => (
                <Link
                  to={link.to}
                  key={link.to}
                  className={clsx(
                    'flex items-center gap-x-1 text-xl underline-on-hover p-2 first:pt-0 last:pb-0',
                    link.to === pathname
                      ? 'text-indigo-500 hover:text-indigo-300'
                      : 'text-slate-400 hover:text-slate-200',
                  )}>
                  {link.text}
                </Link>
              ))}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </li>
  );
};

export default LgScreenLinksMenu;
