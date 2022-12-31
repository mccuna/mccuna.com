import { Links, Meta, Scripts, useCatch, useLocation } from '@remix-run/react';
import { CatchBoundaryComponent } from '@remix-run/react/dist/routeModules';
import HeadingAndIllustration from './components/heading-and-illustration';
import Layout from './components/layout';
import { PrimaryButtonLink, PrimaryLink } from './components/link';
import { routeHrefs } from './constants';

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();

  if (caught.status !== 404) {
    throw new Error(`Unhandled error: ${caught.status}`);
  }

  const { pathname, search, hash } = useLocation();

  return (
    <html lang='en'>
      <head>
        <Links />
        <Meta />
      </head>
      <body className='bg-slate-900'>
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
                <PrimaryLink to={routeHrefs.contact}>contact me</PrimaryLink>.
                It might be that the content is the lost one...
              </>
            }
            callToActionContent={
              <PrimaryButtonLink to={routeHrefs.home} size='large'>
                Go home
              </PrimaryButtonLink>
            }
          />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
};
