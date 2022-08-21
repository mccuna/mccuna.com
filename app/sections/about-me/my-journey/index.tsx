import { SecondaryLink } from '~/components/link';
import { externalLinks, personalConstants } from '~/constants';

const MyJourney = () => {
  const today = new Date();
  const age =
    new Date(
      today.valueOf() - personalConstants.myBirthdate.valueOf(),
    ).getUTCFullYear() - 1970;

  return (
    <div className='prose prose-slate dark:prose-invert lg:prose-xl'>
      <h3>Prologue</h3>
      <p>
        I'm a {age} years old web developer born and living in Craiova Romania
        (here is a{' '}
        <SecondaryLink isExternalLink href={externalLinks.craiovaGoogleMap}>
          Google Maps link
        </SecondaryLink>{' '}
        if you're wondering where that's on the map).
      </p>
      <p>
        I've been passionate about computers and building stuff since when I was
        a little boy and even if at that age I was just playing video games, I
        already felt that growing up, I would end up building things on a
        computer.
      </p>
      <p>
        My programming journey started in high school with C++ algorithms. Back
        then I would have rather built fancy apps, but, in hindsight, this might
        have created a foundation for an upcoming software developer career
      </p>
      <p>
        The technology spectrum started expanding farther than C++ when I joined
        the faculty and started looking for a technology that would "click" for
        me (I wasn't much of a fan of C++). I've gone from Java to php and even
        to Python but none of them felt like "the one".
      </p>
      <h3>NetRom Software Academy</h3>
      <p>
        This changed in my 2nd year of faculty when I found out about Netrom's
        Software Academy. The purpose of the academy was to introduce people
        with zero professional experience to the most popular technologies. For
        an aspiring developer like me, this was a gold mine. I applied and
        passed the admission exam that was meant to select 15-20 people from the
        200+ applicants (I found out years later while working there that I had
        the 2nd highest score from that year).
      </p>
      <p>
        During the academy I got the chance to see what developing apps in .Net,
        Java, php or javascript meant and spend a whole day (shadow day)
        alongside a developer while she was doing her usual work. From the
        technologies presented I've started to really grow into .Net and the
        fact that I got to stay alongside a .Net developer during the shadow day
        cemented my decision to become a .Net developer. At this point, the
        academy participation met its goal, I've got a technology that "clicked"
        for me.
      </p>
      <p>
        About 1 week after the academy ended, I got an email from the company's
        CTO mentioning that I've shown potential and offered an opportunity to
        collaborate with the company to improve my skills.
      </p>
      <p>
        The opportunity consisted basically of me munching as many .Net skills
        as possible in 1 month (the one including the Christmas holidays and New
        Year's Eve 🎄), taking a test, and then based on it in the company
        creating a plan to improve my skills.
      </p>
      <p>
        One month of binge-watching tutorials and building tiny apps later I've
        taken the test. It consisted of 2 days at the company's office where I
        had to build a small app, answer technical questions, and solve various
        challenges. If you're wondering what kind of challenges, let's say that
        one of the best ways to judge how someone debugs code is to make him
        look the other way, break his code and then watch him as he's working on
        fixing it 😄.
      </p>
      <p>
        When the test concluded I found out that I accidentally landed a
        software developer job 😅. Accidentally because nobody ever mentioned
        the possibility of getting a job and I wasn't expecting my skills to be
        at a junior developer level. As expected I agreed to join the company
        (both, professional experience & a salary were veeery welcomed by the 20
        years old me).
      </p>
      <h3>NetRom Software</h3>
      <p>
        For the first 3 months, I worked on some short-term projects within the
        company as a trial period. After the 3 months have passed I joined the
        project which I was going to work on for nearly 4 years. This project
        was a web application to manage private pension contracts with some
        background routines in a windows service. I've started working on this
        project as a solo developer but over time the team size varied between
        2-3 developers.
      </p>
      <p>
        The nearly 4 years that I've worked on this project saw me evolve from a
        junior developer that accidentally landed a job to a team leader.
      </p>
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
      <h3>Digitall (ex Bulpros Consulting)</h3>
      <p>
        Being determined to build frontend apps I've made a job change once
        again and joined Digitall in the summer of 2020 as a frontend developer.
        In terms of "seniority", even though I had 0 professional experience
        using React, my overall experience and the job & client qualified me as
        a "senior developer".
      </p>
      <p>
        I was assigned to a project composed of a Team Lead and 2 other junior
        developers with about 1-2 years of frontend experience. My
        responsibilities in this project were to take technical decisions about
        the architecture together with the team lead, help with the development
        itself, and coach & help the junior developers. So yeah, I had to help
        people with more professional experience than me 😅 (if you ever felt
        the impostor syndrome, well, this is it on steroids).
      </p>
      <p>
        This impostor syndrome feeling made me learn and grow at an incredible
        speed because I wanted to always be able to help someone when that
        someone reached out to me. On a more general note, this is one more
        example of the benefits of the right amount of stress.
      </p>
      <p>
        Things turned out great and in a few months, I've taken full
        responsibility for leading the development while the team lead was
        getting dragged into other projects.
      </p>
      <p>
        After about 1 year at Digitall I had an opportunity to join Tokero, one
        of the largest cryptocurrency exchanges from Romania that was based in
        my city. Tokero finished an investment round and was looking to build a
        development team whose immediate goal was to rewrite the existing
        application, an MVP, because it could no longer handle the increasing
        number of customers. Previously, the developer team consisted of only 1
        man, one of the co-founders.
      </p>
      <h3>Tokero Crypto Exchange</h3>
      <p>
        I joined the Tokero team in the earliest stages of the rewrite and
        participated in all the technical decisions. The currently live app was
        running on ASP.Net MVC and after some discussions, we've decided to go
        for a SPA frontend and a backend API. As the current application was
        already using ASP.NET it was the natural choice to go for .NET Core. For
        the frontend app, we've moved forward with React (the most popular SPA
        framework at that time) and upgraded very soon to Next.js because we
        needed server-side rendering.
      </p>
      <p>
        Like Digitall, I've joined the team as a senior developer and over time
        grew into a team lead & architect. The team size fluctuated, but the
        average size was about 6 developers and 2 QAs.
      </p>
      <p>
        Tokero is the company I'm currently working for and one thing I enjoy
        here is that being a startup company with its own product I have the
        chance to be involved in many areas like marketing and accounting
        besides the development itself.
      </p>
      <h3>Looking forward</h3>
      <p>
        In terms of frameworks and technologies, recently I've discovered Remix
        and fell in love with it. Besides Remix, I've decided to also focus on
        my Javascript-related skills from now on, "archiving" the .Net ones. So
        yeah, this is my journey so far. Who knows what the future will bring?
      </p>
    </div>
  );
};

export default MyJourney;
