import { ErrorBoundaryComponent } from '@remix-run/cloudflare';
import { Links, Meta, Scripts } from '@remix-run/react';
import * as Sentry from '@sentry/react';
import HeadingAndIllustration from './components/heading-and-illustration';
import { PrimaryButtonLink } from './components/link';
import { routeHrefs } from './constants';

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);
  Sentry.captureException(error);

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-slate-900'>
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
        <Scripts />
      </body>
    </html>
  );
};
