import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';
import { loader } from './blog.$slug.loader';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const rawTitle = data.meta.title;

  return {
    ...data.meta,
    title: getPageTitle(rawTitle),
  };
};
