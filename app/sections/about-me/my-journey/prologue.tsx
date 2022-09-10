import { SecondaryLink } from '~/components/link';
import { externalLinks, personalConstants } from '~/constants';
import { getImageCdnUrl } from '~/utils/cdn';
import ChapterContainer from './chapter-container';

const Prologue = () => {
  const today = new Date();
  const age =
    new Date(
      today.valueOf() - personalConstants.myBirthdate.valueOf(),
    ).getUTCFullYear() - 1970;

  return (
    <div className='w-full flex flex-col items-center gap-12 2xl:flex-row 2xl:justify-center 2xl:gap-28'>
      <div>
        <img
          src={getImageCdnUrl({
            imagePath: 'me.webp',
            variant: 'public',
          })}
          alt='Cristian Cună'
          className='rounded-full md:h-140 md:w-140'
        />
      </div>
      <ChapterContainer className='2xl:max-w-xl'>
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
          I've been passionate about computers and building stuff since when I
          was a little boy and even if at that age I was just playing video
          games, I already felt that growing up, I would end up building things
          on a computer.
        </p>
        <p>
          My programming journey started in high school with C++ algorithms.
          Back then I would have rather built fancy apps, but, in hindsight,
          this might have created a foundation for an upcoming software
          developer career.
        </p>
        <p>
          The technology spectrum started expanding farther than C++ when I
          joined the faculty and started looking for a technology that would
          "click" for me (I wasn't much of a fan of C++). I've gone from Java to
          php and even to Python but none of them felt like "the one".
        </p>
      </ChapterContainer>
    </div>
  );
};

export default Prologue;
