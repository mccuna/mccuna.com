import { Menu } from '@headlessui/react';
import { forwardRef, PropsWithChildren } from 'react';
import TopNavigationLink from '../../top-navigation-link/top-navigation-link';

type Props = {
  to: string;
  // The Headless UI dropdown adds its own props to the NavLink component.
} & Record<string, unknown>;

const SmallScreenNavigationLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<Props>
>(({ to, children, ...otherProps }, ref) => {
  return (
    <Menu.Item>
      <TopNavigationLink
        to={to}
        className='py-3 focus:bg-slate-800'
        ref={ref}
        {...otherProps}>
        {children}
      </TopNavigationLink>
    </Menu.Item>
  );
});

export default SmallScreenNavigationLink;
