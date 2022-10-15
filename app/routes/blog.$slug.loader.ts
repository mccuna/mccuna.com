import { json, LoaderArgs } from '@remix-run/cloudflare';
import { renderToString } from 'react-dom/server';

export const loader = async ({}: LoaderArgs) => {
  const articleModule = await import('~/components/article-1');

  const reactElementObj = articleModule.default();

  const elementString = renderToString(reactElementObj);

  return json({
    meta: articleModule.meta,
    elementString,
  });
};
