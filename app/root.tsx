import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react';
import { FC, PropsWithChildren, StrictMode, useEffect } from 'react';
import HeadingAndIllustration from './components/heading-and-illustration';
import Layout from './components/layout';
import { PrimaryButtonLink, PrimaryLink } from './components/link';
import { externalLinks } from './constants/external-links';
import { routeHrefs } from './constants/routes-hrefs';
import { loader } from './root.loader';
import { ErrorBoundaryProps, ErrorLog } from './types/error-related';

export { handle } from './root.handle';
export { links } from './root.links';
export { meta } from './root.meta';
export { loader };

const Document: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <html lang='en' className='scroll-smooth antialiased'>
        <head>
          <Meta />
          <Links />
        </head>
        <body className='bg-slate-900'>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </StrictMode>
  );
};

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
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

export default App;

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      fetch('/logs', {
        method: 'POST',
        body: JSON.stringify({
          name: error.name,
          message: error.message,
          pathname,
          hash,
          search,
        } as ErrorLog),
      });
    }
  }, [error, hash, pathname, search]);

  return (
    <Document>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='w-10/12 sm:w-3/4 lg:w-10/12 xl:w-3/4'>
          <HeadingAndIllustration
            title='Oops!'
            subTitle='A wild bug appears!'
            altText="This little guy got logged and I'm looking into it as soon as possible."
            illustration={{
              cdnPath: 'illustrations/generic-error.svg',
              width: 1119,
              height: 699,
            }}
            callToActionContent={
              <PrimaryButtonLink to={routeHrefs.home} size='large'>
                Go home
              </PrimaryButtonLink>
            }
          />
        </div>
      </div>
    </Document>
  );
};

export const CatchBoundary: FC = () => {
  const caught = useCatch();

  if (caught.status !== 404) {
    throw new Error(`Unhandled error: ${caught.status}`);
  }

  const { pathname, search, hash } = useLocation();

  return (
    <Document>
      <Layout>
        <HeadingAndIllustration
          title='404 - Nothing here'
          subTitle="It seems that you're lost. Go home!"
          illustration={{
            cdnPath: 'illustrations/404.svg',
            width: 851,
            height: 818,
          }}
          altText={
            <>
              If you think that "{pathname}
              {search}
              {hash}" is the place where you should be, please{' '}
              <PrimaryLink to={routeHrefs.contact}>contact me</PrimaryLink>. It
              might be that the content is the lost one...
            </>
          }
          callToActionContent={
            <PrimaryButtonLink to={routeHrefs.home} size='large'>
              Go home
            </PrimaryButtonLink>
          }
        />
      </Layout>
    </Document>
  );
};
