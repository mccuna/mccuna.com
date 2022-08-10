import { Form, useActionData } from '@remix-run/react';
import { PrimaryButton } from '~/components/button';
import Card from '~/components/card';
import { FormInput, FormTextArea } from '~/components/form';
import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import LocalTime from '~/components/local-time/local-time';
import { action, FieldName } from './contact.action';
import contactIllustration from '/public/images/illustrations/contact.svg';

export { action };

const Contact = () => {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <HeadingAndIllustration
        title='Want to get in touch?'
        subTitle='Send me a message'
        illustrationSrc={contactIllustration}
      />
      <div className='flex flex-col items-center py-10 text-slate-500'>
        <div>
          <p>
            Leave me an email at{' '}
            <a
              href='mailto:cristian@mccuna.com'
              className='text-indigo-500 hover:text-indigo-300'>
              cristian@mccuna.com
            </a>{' '}
            or use the below form to send me a message. I'll do my best to
            respond as soon as possible.
          </p>
          <p>
            In case you were wondering, my local time is{' '}
            <LocalTime className='text-slate-400' />
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Form>
          <Card variant='default' className='w-200'>
            <Card.Title>Contact</Card.Title>
            <Card.Body>
              <FormInput
                inputProps={{
                  name: FieldName.name,
                }}
                labelProps={{
                  children: 'Name',
                }}
              />
              <FormInput
                inputProps={{
                  type: 'email',
                  name: FieldName.email,
                }}
                labelProps={{
                  children: 'Email',
                }}
              />
              <FormInput
                inputProps={{
                  name: FieldName.subject,
                }}
                labelProps={{
                  children: 'Subject',
                }}
              />

              <FormTextArea
                textAreaProps={{
                  name: FieldName.message,
                }}
                labelProps={{
                  children: 'Message',
                }}
              />
            </Card.Body>
            <Card.Actions>
              <PrimaryButton>Send message</PrimaryButton>
            </Card.Actions>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
