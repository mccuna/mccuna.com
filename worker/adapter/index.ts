import { ServerBuild } from '@remix-run/cloudflare';
import { createWorkerAssetHandler } from './assets-handler';
import { createRequestHandler } from './request-handler';
import { GetLoadContext } from './types';

type CreateFetchHandlerArgs<Env> = {
  build: ServerBuild;
  getLoadContext: GetLoadContext<Env>;
  mode?: ProcessEnv['NODE_ENV'];
};
export const createFetchHandler = <Env>({
  build,
  getLoadContext,
  mode,
}: CreateFetchHandlerArgs<Env>): ExportedHandlerFetchHandler<Env> => {
  const handleRequest = createRequestHandler({ build, getLoadContext, mode });
  const handleAsset = createWorkerAssetHandler({ build, mode });

  return async (
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> => {
    try {
      const isHeadOrGetRequest =
        request.method === 'HEAD' || request.method === 'GET';

      if (isHeadOrGetRequest) {
        const response = await handleAsset(request.clone(), env, ctx);
        if (response.ok) {
          return response;
        }
      }

      return await handleRequest(request, env, ctx);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : error?.toString();

      // eslint-disable-next-line no-console
      console.log('Error caught', errorMessage, error);

      if (process.env.NODE_ENV === 'development') {
        return new Response(errorMessage, {
          status: 500,
        });
      }

      return new Response('Internal Server Error', {
        status: 500,
      });
    }
  };
};
