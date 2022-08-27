import { FC } from 'react';
import { SecondaryLink } from '~/components/link';

type Props = {
  icon: FC<{ className?: string }>;
  href: string;
};

const SocialLink: FC<Props> = ({ icon: Icon, href }) => {
  return (
    <SecondaryLink href={href} isExternalLink>
      <Icon className='h-10 w-10 fill-indigo-500 hover:fill-indigo-300' />
    </SecondaryLink>
  );
};

export default SocialLink;
