import { FC } from 'react';

type Props = {
  icon: FC<{ className?: string }>;
  href: string;
};

const SocialLink: FC<Props> = ({ icon: Icon, href }) => {
  console.log(href);
  return (
    <a href={href} target='_blank'>
      <Icon className='h-10 w-10 fill-slate-500 hover:fill-slate-300' />
    </a>
  );
};

export default SocialLink;
