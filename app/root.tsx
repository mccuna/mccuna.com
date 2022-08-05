import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import globalStyles from '~/styles/global.css';
import tailwindStyles from '~/styles/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

const App = () => {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/ABeeZee-Regular.woff2',
      type: 'font/woff2',
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
