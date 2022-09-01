import { EntryContext } from '@remix-run/cloudflare';

export type CustomRoute = {
  pathname: string;
  resolve: (
    request: Request,
    remixContext: EntryContext,
  ) => Promise<Response | null>;
};
