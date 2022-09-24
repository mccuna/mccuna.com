import {
  createRequestHandler as createRemixRequestHandler,
  ServerBuild,
} from '@remix-run/cloudflare';
import { GetLoadContext } from './types';

type CreateRequestHandlerArgs<Env> = {
  build: ServerBuild;
  getLoadContext: GetLoadContext<Env>;
  mode?: ProcessEnv['NODE_ENV'];
};

export const createRequestHandler = <Env>({
  build,
  getLoadContext,
  mode,
}: CreateRequestHandlerArgs<Env>): ExportedHandlerFetchHandler<Env> => {
  const handleRequest = createRemixRequestHandler(build, mode);

  return (request, env, ctx) => {
    const loadContext = getLoadContext(request, env, ctx);
    return handleRequest(request, loadContext);
  };
};
