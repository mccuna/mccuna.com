import { json, LoaderArgs } from '@remix-run/cloudflare';
import { BlogArticle } from '~/types/blog/blog-article';

export const loader = async ({ context }: LoaderArgs) => {
  const articleJson = await context.env.KV_CONTENT.get('article-1.json');

  if (!articleJson) {
    throw json(null, { status: 404 });
  }

  const article = JSON.parse(articleJson) as BlogArticle;

  return json(article);
};
