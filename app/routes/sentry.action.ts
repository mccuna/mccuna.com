import { ActionArgs } from '@remix-run/cloudflare';

export const action = async ({ request }: ActionArgs) => {
  if (process.env.NODE_ENV === 'development') {
    return new Response(null, { status: 200 });
  }

  const envelope = await request.text();

  const pieces = envelope.split('\n');
  const header = JSON.parse(pieces[0]);
  // DSNs are of the form `https://<key>@o<orgId>.ingest.sentry.io/<projectId>`
  const { pathname } = new URL(header.dsn);
  // Remove leading slash
  const projectId = pathname.substring(1);

  const sentryIngestURL = `https://sentry.io/api/${projectId}/envelope/`;
  const sentryResponse = await fetch(sentryIngestURL, {
    method: 'POST',
    body: envelope,
  });

  return sentryResponse;
};
