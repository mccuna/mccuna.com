import HeadingAndIllustration from '~/components/heading-and-illustration';
import { PrimaryButtonLink } from '~/components/link';
import { routeHrefs } from '~/constants/routes-hrefs';
import homeIllustration from '/public/images/illustrations/home.svg';

const Index = () => {
  const careerStartYear = 2016;
  const currentDate = new Date();
  const experienceYears = currentDate.getFullYear() - careerStartYear;

  return (
    <div>
      <HeadingAndIllustration
        title='Mihai Cristian Cuna'
        subTitle='Software Developer'
        altText={`For more than ${experienceYears} years I've been working on improving web applications and developing new ones from scratch using the latest technologies.`}
        callToActionContent={
          <PrimaryButtonLink to={routeHrefs.contact} size='large'>
            Message me
          </PrimaryButtonLink>
        }
        illustrationSrc={homeIllustration}
      />
    </div>
  );
};

export default Index;
