import { AppLoadContext } from '@remix-run/cloudflare';

export type GetLoadContext<Env> = (
  request: Request,
  env: Env,
  ctx: ExecutionContext,
) => AppLoadContext;
