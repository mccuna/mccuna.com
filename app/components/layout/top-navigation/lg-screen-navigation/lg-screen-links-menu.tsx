import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { FC, useState } from 'react';
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

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <li onMouseLeave={() => setIsMenuVisible(false)}>
      <div className='relative w-full mx-6 my-3'>
        <button
          className={clsx(
            'flex items-center gap-x-1 text-xl',
            isMenuActive
              ? 'text-indigo-500 hover:text-indigo-300'
              : 'text-slate-400 hover:text-slate-200',
          )}
          onMouseEnter={() => setIsMenuVisible(true)}
          type='button'>
          {buttonText}
          <ChevronDownIcon className='h-8 w-8' />
        </button>

        {isMenuVisible && (
          <div className='absolute top-full flex flex-col w-max p-2 bg-slate-700 rounded-md divide-y divide-slate-900 text-lg '>
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                className={clsx(
                  'underline-on-hover p-2 first:pt-0 last:pb-0',
                  link.to === pathname
                    ? 'text-indigo-500 hover:text-indigo-300'
                    : 'text-slate-400 hover:text-slate-200',
                )}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default LgScreenLinksMenu;
