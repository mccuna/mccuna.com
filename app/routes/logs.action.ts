import { ActionArgs } from '@remix-run/cloudflare';

export const action = async ({ request }: ActionArgs) => {
  const dsnUrl = new URL(DSN_URL);

  const projectId = dsnUrl.pathname.replaceAll('/', '');

  await fetch(`https://${dsnUrl.host}/api/${projectId}/envelope/`, {
    method: 'POST',
    body: request.body,
  });

  return new Response(null, { status: 200 });
};
