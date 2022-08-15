import type { LinksFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import globalStyles from '~/styles/global.css';
import tailwindStyles from '~/styles/tailwind.css';
import Layout from './components/layout/layout';
import { loader } from './root.loader';
import { AppRouteHandle } from './types/app-route-handle';

export { meta } from './root.meta';
export { loader };

const App = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-slate-900'>
        <Layout>
          <Outlet />
        </Layout>
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

export const handle: AppRouteHandle = {
  id: 'root',
};
