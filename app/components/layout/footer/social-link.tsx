import { FC } from 'react';
import { SecondaryLink } from '~/components/link';

type Props = {
  icon: FC<{ className?: string }>;
  href: string;
  ariaLabel: string;
};

const SocialLink: FC<Props> = ({ icon: Icon, href, ariaLabel }) => {
  return (
    <SecondaryLink href={href} isExternalLink aria-label={ariaLabel}>
      <Icon className='h-10 w-10 fill-indigo-500 hover:fill-indigo-300' />
    </SecondaryLink>
  );
};

export default SocialLink;
