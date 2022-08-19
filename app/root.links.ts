import { LinksFunction } from '@remix-run/cloudflare';
import globalStyles from '~/styles/global.css';
import tailwindStyles from '~/styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/ABeeZee-Regular.woff2',
      type: 'font/woff2',
    },
    {
      rel: 'stylesheet',
      href: tailwindStyles,
    },
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
  ];
};
