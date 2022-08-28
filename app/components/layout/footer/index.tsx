import { FC } from 'react';
import { GithubIcon, LinkedinIcon } from '~/components/icons';
import { externalLinks } from '~/constants/external-links';
import SocialLink from './social-link';

const Footer: FC = () => {
  // TODO: Add build version
  return (
    <footer className='flex flex-col items-center gap-y-4 mb-7 text-md text-slate-400'>
      <div className='flex gap-x-6'>
        <SocialLink icon={LinkedinIcon} href={externalLinks.linkedinProfile} />
        <SocialLink icon={GithubIcon} href={externalLinks.githubProfile} />
      </div>
      <p>All rights reserved © mc cună 2022</p>
    </footer>
  );
};

export default Footer;
