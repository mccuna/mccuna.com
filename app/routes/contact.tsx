import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Form, useActionData, useTransition } from '@remix-run/react';
import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { PrimaryButton } from '~/components/button';
import Card from '~/components/card';
import ErrorMessage from '~/components/error-message/error-message';
import { FormInput, FormTextArea } from '~/components/form';
import HeadingAndIllustration from '~/components/heading-and-illustration/heading-and-illustration';
import LocalTime from '~/components/local-time/local-time';
import { emailConstants } from '~/constants/email-constants';
import { getEmailClientSideError } from '~/helpers/form-validation/fields-validation';
import { getHCaptchaClientSideError } from '~/helpers/form-validation/fields-validation/hcaptcha-validation';
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
import contactIllustration from '/public/images/illustrations/contact.svg';

export { action };

// TODO: Add cypress test for happy flow
// TODO: Add captcha
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
    isSubmitted,
    errors,
    clearError,
  } = useFormValidation<FieldName>({
    serverSideErrors: actionData?.fieldErrors,
    validationRules: {
      email: getEmailClientSideError,
      name: getNameError,
      subject: getSubjectError,
      message: getMessageError,
      'h-captcha-response': getHCaptchaClientSideError,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);
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
    formRef.current && reset(formRef.current);
    captchaRef.current?.resetCaptcha();
    setPreviousMessageSentSuccessfullyTs(
      actionData?.payload?.messageSentSuccessfullyTs,
    );
  }

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
              {emailConstants.myEmail}
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
          <Form method='post' noValidate ref={formRef} {...formEventHandlers}>
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
                      errors['h-captcha-response'] &&
                        'border-2 border-red-500 rounded-md w-fit',
                    )}>
                    <HCaptcha
                      sitekey={ENV.HCAPTCHA_SITE_KEY}
                      onVerify={() => {
                        clearError(FieldName.hCaptchaResponse);
                      }}
                      ref={captchaRef}
                    />
                  </div>
                  {errors['h-captcha-response'] && (
                    <ErrorMessage errorMessage={errors['h-captcha-response']} />
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
