import ChapterContainer from './chapter-container';

const Tokero = () => {
  return (
    <ChapterContainer>
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
    </ChapterContainer>
  );
};

export default Tokero;
