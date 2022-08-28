import { ActionArgs } from '@remix-run/cloudflare';
import { ErrorLog } from '~/types';
import { logError } from '~/utils/log-error.server';
import { badRequest } from '~/utils/server-response-shorthand';

export const action = async ({ request }: ActionArgs) => {
  if (process.env.NODE_ENV !== 'production') {
    return badRequest({
      errorMessage: 'Trying to log an error in dev mode',
    });
  }

  const bodyJson = await request.text();
  if (!bodyJson) {
    return badRequest({
      errorMessage: 'Request body is required',
    });
  }

  const errorLog = JSON.parse(bodyJson) as ErrorLog;
  await logError(errorLog);

  return new Response(null, { status: 200 });
};
