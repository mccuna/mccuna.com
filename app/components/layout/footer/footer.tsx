import { FC } from 'react';
import { GithubIcon, LinkedinIcon } from '~/components/icons';
import SocialLink from './social-link/social-link';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center gap-y-4 my-7 text-md text-slate-400'>
      <div className='flex gap-x-6'>
        <SocialLink icon={LinkedinIcon} href={LINKEDIN_URL} />
        <SocialLink icon={GithubIcon} href={GITHUB_URL} />
      </div>
      <p>All rights reserved © mc cuna 2022</p>
    </footer>
  );
};

export default Footer;
