import abeezeeFontCss from '@fontsource/abeezee';
import { LinksFunction } from '@remix-run/cloudflare';
import globalStyles from '~/styles/global.css';
import tailwindStyles from '~/styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'style',
      href: abeezeeFontCss,
      type: 'text/css',
      crossOrigin: 'anonymous',
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
