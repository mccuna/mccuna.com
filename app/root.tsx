import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { StrictMode, useEffect } from 'react';
import Layout from './components/layout';
import { externalLinks } from './constants/external-links';
import { loader } from './root.loader';

export { CatchBoundary } from './root.catch-boundary';
export { ErrorBoundary } from './root.error-boundary';
export { handle } from './root.handle';
export { links } from './root.links';
export { meta } from './root.meta';
export { loader };

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      `%cHey, if you're curious about how the site is built, it's open-source. 
Check it here: ${externalLinks.githubRepo}`,
      'color:#6366f1;font-size:1.2rem;font-family:ABeeZee',
    );
  }, []);

  return (
    <StrictMode>
      <html lang='en' className='scroll-smooth antialiased'>
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
    </StrictMode>
  );
};

export default App;
