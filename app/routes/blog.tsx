import { Outlet } from '@remix-run/react';

const Blog = () => {
  return (
    <div className='prose prose-slate dark:prose-invert lg:prose-2xl [&>pre]:p-0'>
      <Outlet />
    </div>
  );
};

export default Blog;
