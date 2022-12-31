import { useLoaderData } from '@remix-run/react';
import { loader } from './blog.$slug.loader';

export { links } from './blog.$slug.links';
export { meta } from './blog.$slug.meta';
export { loader };

const BlogArticle = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className='prose prose-slate dark:prose-invert lg:prose-2xl '>
      <main
        className='[&>pre]:p-0'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: loaderData.html }}
      />
    </div>
  );
};

export default BlogArticle;
