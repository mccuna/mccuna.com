import { Turnstile } from '@marsidev/react-turnstile';
import { Form, useActionData, useTransition } from '@remix-run/react';
import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { PrimaryButton } from '~/components/button';
import Card from '~/components/card';
import ErrorMessage from '~/components/error-message';
import { FormInput, FormTextArea } from '~/components/form';
import HeadingAndIllustration from '~/components/heading-and-illustration';
import LocalTime from '~/components/local-time';
import { personalConstants } from '~/constants/personal-constants';
import { getEmailClientSideError } from '~/helpers/form-validation/fields-validation';
import { getTurnstileClientSideError } from '~/helpers/form-validation/fields-validation/turnstile-validation';
import { FormValidationContext } from '~/helpers/form-validation/form-validation-context';
import { useFormValidation } from '~/helpers/form-validation/use-form-validation';
import { useRootLoaderData } from '~/utils/use-match-loader-data';
import {
  action,
  FieldName,
  getMessageError,
  getNameError,
  getSubjectError,
} from './contact.action';

export { meta } from './contact.meta';
export { action };

const Contact: FC = () => {
  const actionData = useActionData<typeof action>();
  const { ENV } = useRootLoaderData();
  const [
    previousMessageSentSuccessfullyTs,
    setPreviousMessageSentSuccessfullyTs,
  ] = useState(actionData?.payload?.messageSentSuccessfullyTs);

  const {
    formValidationContextValue,
    formEventHandlers,
    reset,
    errors,
    clearError,
  } = useFormValidation<FieldName>({
    serverSideErrors: actionData?.fieldErrors,
    validationRules: {
      email: getEmailClientSideError,
      name: getNameError,
      subject: getSubjectError,
      message: getMessageError,
      'cf-turnstile-response': getTurnstileClientSideError,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const messageSentCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!actionData?.payload?.messageSentSuccessfullyTs) {
      return () => {};
    }

    const timeout = setTimeout(() => {
      messageSentCardRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, [actionData?.payload?.messageSentSuccessfullyTs]);

  const transition = useTransition();

  if (
    actionData?.payload?.messageSentSuccessfullyTs !==
    previousMessageSentSuccessfullyTs
  ) {
    if (formRef.current) {
      reset(formRef.current);
    }

    setPreviousMessageSentSuccessfullyTs(
      actionData?.payload?.messageSentSuccessfullyTs,
    );
  }

  return (
    <div>
      <HeadingAndIllustration
        title='Want to get in touch?'
        subTitle='Send me a message'
        illustration={{
          cdnPath: 'illustrations/contact.svg',
          width: 614,
          height: 528,
        }}
      />
      <div className='flex flex-col items-center py-10 text-slate-500'>
        <div>
          <p>
            Leave me an email at{' '}
            <a
              href='mailto:cristian@mccuna.com'
              className='text-indigo-500 hover:text-indigo-300'>
              {personalConstants.myEmail}
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
        <div className='w-full flex flex-col gap-y-7 lg:w-160 xl:w-200'>
          {actionData?.payload?.messageSentSuccessfullyTs && (
            <Card
              variant='success'
              ref={messageSentCardRef}
              className='scroll-mt-16'>
              <Card.Title>Message sent!</Card.Title>
              <Card.Body>
                I've got your message and I'll get back to you shortly!
              </Card.Body>
            </Card>
          )}
          <Form
            method='post'
            noValidate
            ref={formRef}
            {...formEventHandlers}
            id='contactForm'>
            <FormValidationContext.Provider value={formValidationContextValue}>
              <Card>
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
                      autoComplete: 'off',
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
                  <div
                    className={clsx(
                      errors['cf-turnstile-response'] &&
                        'border-2 border-red-500 rounded-md w-fit',
                      'scale-75 -translate-x-1/8 sm:scale-100 sm:translate-x-0',
                    )}>
                    <Turnstile
                      siteKey={ENV.TURNSTILE_SITE_KEY}
                      onSuccess={() => {
                        clearError(FieldName.cfTurnstileResponse);
                      }}
                    />
                  </div>
                  {errors['cf-turnstile-response'] && (
                    <ErrorMessage
                      errorMessage={errors['cf-turnstile-response']}
                    />
                  )}
                </Card.Body>
                <Card.Actions>
                  <PrimaryButton
                    type='submit'
                    disabled={transition.state === 'submitting'}>
                    Send message
                  </PrimaryButton>
                </Card.Actions>
              </Card>
            </FormValidationContext.Provider>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
