import { SecondaryLink } from '~/components/link';
import { externalLinks } from '~/constants';

const LibraInternetBank = () => {
  return (
    <div className='prose prose-slate dark:prose-invert lg:prose-xl'>
      <h3>Libra Internet Bank</h3>
      <p>
        After 4 years of working on the same project, I felt I need to switch
        the project to continue to improve so I made a job change and joined
        Libra Internet Bank.
      </p>
      <p>
        At Libra, I designed and kickstarted the migration from a SQL-based
        architecture with all the logic in stored procedures to a
        microservices-based architecture. As a fun fact, the company had so many
        stored procedures that expanding the stored procedures folder without
        applying a filter was crashing my pc to the point I had to turn it off
        and on again.
      </p>

      <p>
        During this period I've begun playing with various javascript SPA
        frameworks in my spare time. I've gone from building apps in Angular to
        passing the interview process from{' '}
        <SecondaryLink href={externalLinks.toptal} isExternalLink>
          www.toptal.com
        </SecondaryLink>{' '}
        by building a Vue.js app to finally settling on React. Being highly
        unopinionated I felt that React was giving me more freedom in terms of
        architecture and design. I started to like frontend development more and
        more so I've decided to make a job change that would allow me to focus
        on React.
      </p>
    </div>
  );
};

export default LibraInternetBank;
