/* TODO: check if able to switch to using fonts directly instead of
 @fontsource once https://github.com/remix-run/remix/issues/1153 is fixed
*/
// @ts-ignore
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
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ];
};
