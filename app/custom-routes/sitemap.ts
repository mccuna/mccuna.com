import { EntryContext } from '@remix-run/cloudflare';
import { EntryRoute } from '@remix-run/react/dist/routes';
import { handle as rootHandle } from '~/root.handle';
import { AppRouteHandle } from '~/types';
import { getRequestOrigin } from '~/utils/request-utils';
import { CustomRoute } from './types';

export const sitemap: CustomRoute = {
  pathname: '/sitemap.xml',
  async resolve(request, remixContext) {
    const sitemapXML = getSitemapXML(request, remixContext);
    return new Response(sitemapXML, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  },
};

const getSitemapXML = (
  request: Request,
  remixContext: EntryContext,
): string => {
  const sitemapEntries = Object.values(remixContext.manifest.routes)
    .filter((route) => {
      const handle = remixContext.routeModules[route.id]
        ?.handle as AppRouteHandle;

      /* Allow only routes with a path, but make an exception for
       * the root route in order to index the "/" path
       */
      if (!route.path && handle?.id !== rootHandle.id) {
        return false;
      }

      // ignore dynamic routes for now
      // TODO: Handle dynamic routes
      if (route.path?.includes(':')) {
        return false;
      }

      return !handle?.isActionOnly && !handle?.isPermanentRedirect;
    })
    .map((route) =>
      getSitemapEntry({
        origin: getRequestOrigin(request),
        route,
      }),
    );

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries.join('')}
</urlset>
`;

  return sitemapXML;
};

type GetSitemapEntryArgs = {
  origin: string;
  route: EntryRoute;
};

const getSitemapEntry = ({ origin, route }: GetSitemapEntryArgs) => {
  return `<url>
  <loc>${origin}/${route.path}</loc>
</url>`;
};
