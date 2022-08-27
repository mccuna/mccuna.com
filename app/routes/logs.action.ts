import { ActionArgs } from '@remix-run/cloudflare';
import { badRequest } from '~/utils/server-response-shorthand';

export const action = async ({ request }: ActionArgs) => {
  if (process.env.NODE_ENV !== 'production') {
    return badRequest({
      errorMessage: 'Trying to log a sentry error in dev mode',
    });
  }

  const dsnUrl = new URL(DSN_URL);

  const projectId = dsnUrl.pathname.replaceAll('/', '');

  await fetch(`https://${dsnUrl.host}/api/${projectId}/envelope/`, {
    method: 'POST',
    body: request.body,
  });

  return new Response(null, { status: 200 });
};
