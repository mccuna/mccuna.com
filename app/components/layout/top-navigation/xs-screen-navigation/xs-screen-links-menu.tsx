import { FC, MouseEventHandler } from 'react';
import { ChevronDownIcon } from '~/components/icons/chevron-down-icon';
import XsScreenNavigationLink from './xs-screen-navigation-link';

type Props = {
  menuName: string;
  links: {
    to: string;
    text: string;
  }[];
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

const XsScreenLinksMenu: FC<Props> = ({ links, menuName, onClick }) => {
  return (
    <li>
      <span className='text-3xl text-slate-700'>
        {menuName}
        <ChevronDownIcon className='inline-block ml-1 h-8 w-8' />
      </span>
      <div className='flex flex-col gap-y-6 mt-6 ml-6'>
        {links.map((link) => (
          <XsScreenNavigationLink key={link.to} to={link.to} onClick={onClick}>
            {link.text}
          </XsScreenNavigationLink>
        ))}
      </div>
    </li>
  );
};

export default XsScreenLinksMenu;
