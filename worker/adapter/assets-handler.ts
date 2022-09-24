import {
  getAssetFromKV,
  MethodNotAllowedError,
  NotFoundError,
  Options as KvAssetHandlerOptions,
} from '@cloudflare/kv-asset-handler';
import { ServerBuild } from '@remix-run/cloudflare';
// @ts-expect-error External JSON only available in CF runtime / Miniflare
import manifest from '__STATIC_CONTENT_MANIFEST';

export type HandleWorkerAsset<Env> = (
  request: Request,
  env: Env,
  ctx: ExecutionContext,
) => Promise<Response>;

type GetAssetManifestArgs = {
  cache: Cache;
  ctx: ExecutionContext;
};

const getAssetManifest = async ({
  cache,
  ctx,
}: GetAssetManifestArgs): Promise<any> => {
  const nextAssetManifest = JSON.parse(manifest);

  try {
    const manifestCache = new Request('http://worker.localhost/');
    const response = await cache.match(manifestCache);
    const prevAssetManifest = await response?.json<Record<string, any>>();
    const assetManifest = {
      ...prevAssetManifest,
      ...nextAssetManifest,
    };

    const oneYearInSeconds = 60 * 60 * 24 * 365;
    ctx.waitUntil(
      cache.put(
        manifestCache,
        new Response(assetManifest, {
          headers: {
            'cache-control': `max-age=${oneYearInSeconds}`,
          },
        }),
      ),
    );

    return assetManifest;
  } catch (error) {
    return nextAssetManifest;
  }
};

type CreateWorkerAssetHandlerArgs = {
  build: ServerBuild;
  mode?: ProcessEnv['NODE_ENV'];
};

export const createWorkerAssetHandler = <Env>({
  build,
  mode,
}: CreateWorkerAssetHandlerArgs): HandleWorkerAsset<Env> => {
  return async (request, env, ctx) => {
    try {
      const event = {
        request: request,
        waitUntil(promise: Promise<any>) {
          return ctx.waitUntil(promise);
        },
      };

      const options: Partial<KvAssetHandlerOptions> = {
        ASSET_NAMESPACE: (env as any).__STATIC_CONTENT,
        ASSET_MANIFEST: await getAssetManifest({
          cache: await caches.open('assets'),
          ctx,
        }),
      };

      const assetPath = build.assets.url.split('/').slice(0, -1).join('/');
      const requestPath = new URL(request.url).pathname
        .split('/')
        .slice(0, -1)
        .join('/');

      if (requestPath.startsWith(assetPath)) {
        // Assets hashed by remix are safe to cache for 365 days both, on the edge and in the browser
        options.cacheControl = {
          edgeTTL: 60 * 60 * 24 * 365, // 365 days
          browserTTL: 60 * 60 * 24 * 365, // 365 days
        };
      } else {
        // Assets that are not hashed by remix can be cached for long only on the edge where we can invalidate them. In the browser cache them only for 1 hour to avoid stale content
        options.cacheControl = {
          edgeTTL: 60 * 60 * 24 * 365, // 365 days
          browserTTL: 60 * 60, // 1 hour
        };
      }

      if (mode === 'development') {
        options.cacheControl = {
          bypassCache: true,
        };
      }

      return await getAssetFromKV(event, options);
    } catch (error) {
      if (error instanceof MethodNotAllowedError) {
        return new Response('Method Not Allowed', { status: 405 });
      }
      if (error instanceof NotFoundError) {
        return new Response('Not found', { status: 404 });
      }

      throw error;
    }
  };
};
