import HeadingAndIllustration from '~/components/heading-and-illustration';
import { PrimaryButtonLink } from '~/components/link';
import { routeHrefs } from '~/constants/routes-hrefs';

const Index = () => {
  const careerStartYear = 2016;
  const currentDate = new Date();
  const experienceYears = currentDate.getFullYear() - careerStartYear;

  return (
    <div>
      <HeadingAndIllustration
        title='Mihai Cristian Cună'
        subTitle='Software Developer'
        altText={`For more than ${experienceYears} years I've been working on improving existing web applications and developing new ones from scratch using the latest technologies.`}
        illustration={{
          cdnPath: 'illustrations/home.svg',
          width: 786,
          height: 572,
        }}
        callToActionContent={
          <PrimaryButtonLink to={routeHrefs.contact} size='large'>
            Message me
          </PrimaryButtonLink>
        }
      />
    </div>
  );
};

export default Index;
