import { FC, MouseEventHandler } from 'react';
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
    <li className='p-6'>
      <span className='text-3xl text-slate-700'>{menuName}</span>
      {links.map((link) => (
        <XsScreenNavigationLink
          key={link.to}
          to={link.to}
          className='ml-4'
          onClick={onClick}>
          {link.text}
        </XsScreenNavigationLink>
      ))}
    </li>
  );
};

export default XsScreenLinksMenu;
