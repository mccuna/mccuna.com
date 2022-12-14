import { ActionArgs, json } from '@remix-run/cloudflare';
import invariant from 'tiny-invariant';
import { emailConstants } from '~/constants/email-constants';
import { sendEmail } from '~/helpers/email';
import { MailersendMail } from '~/helpers/email/mailersend-mail';
import { getEmailError } from '~/helpers/form-validation/fields-validation/email-validation.server';
import { getTurnstileError } from '~/helpers/form-validation/fields-validation/turnstile-validation.server';
import {
  areFieldsValid,
  getActionDataFields,
} from '~/helpers/form-validation/form-utils';
import { ActionData, FieldError, GetFieldsErrors } from '~/types/action-data';
import { Env } from '~/types/env';
import { badRequest } from '~/utils/server-response-shorthand';

export const action = async ({ request, context }: ActionArgs) => {
  const fields = await getActionDataFields<FieldName>(request);

  const ipAddress = request.headers.get('CF-Connecting-IP');
  invariant(ipAddress, 'ipAddress is required');

  const fieldErrors = await getFieldsErrors({
    fields,
    env: context.env,
    ipAddress,
  });

  const actionData: FormActionData = {
    fieldErrors,
    fields,
    formErrors: [],
  };

  if (!areFieldsValid<FieldName, FormFields>(fields, fieldErrors)) {
    return badRequest(actionData);
  }

  const mail: MailersendMail = {
    from: emailConstants.contactMessage.from,
    to: [emailConstants.contactMessage.to],
    html: actionData.fields.message,
    reply_to: {
      email: actionData.fields.email,
      name: actionData.fields.name,
    },
    subject: actionData.fields.subject,
  };

  await sendEmail({
    mail,
    env: context.env,
    sentry: context.data.sentry,
  });

  actionData.payload = {
    messageSentSuccessfullyTs: Date.now(),
  };

  return json(actionData);
};

export enum FieldName {
  name = 'name',
  email = 'email',
  subject = 'subject',
  message = 'message',
  cfTurnstileResponse = 'cf-turnstile-response',
}

const getFieldsErrors: GetFieldsErrors<
  FieldName,
  { env: Env; ipAddress: string }
> = async ({ fields, env, ipAddress }) => {
  return {
    email: await getEmailError({
      email: fields.email,
      domainVerificationConfig: {
        apiKey: env.VERIFIER_MEETCHOPRA_KEY,
      },
    }),
    name: getNameError(fields.name),
    subject: getSubjectError(fields.subject),
    message: getMessageError(fields.message),
    'cf-turnstile-response': await getTurnstileError({
      turnstileResponse: fields['cf-turnstile-response'],
      TURNSTILE_SECRET_KEY: env.TURNSTILE_SECRET_KEY,
      ipAddress,
    }),
  };
};

export const getNameError = (name: string): FieldError => {
  if (!name || typeof name !== 'string') {
    return 'Name is required';
  }

  if (name.length < 3) {
    return 'Name is too short';
  }

  if (name.length > 50) {
    return 'Name is too long';
  }

  return null;
};

export const getSubjectError = (subject: string): FieldError => {
  if (!subject || typeof subject !== 'string') {
    return 'Subject is required';
  }

  if (subject.length < 10) {
    return 'Subject should be at least 10 characters long';
  }

  if (subject.length > 75) {
    return 'Subject should be at most 75 characters long';
  }

  return null;
};

export const getMessageError = (message: string): FieldError => {
  if (!message || typeof message !== 'string') {
    return 'Message is required';
  }

  if (message.length < 75) {
    return 'Message should be at least 75 characters long';
  }

  if (message.length > 2000) {
    return 'Message should be at most 2000 characters long';
  }

  return null;
};

type FormFields = {
  [FieldName.name]: string;
  [FieldName.email]: string;
  [FieldName.subject]: string;
  [FieldName.message]: string;
  [FieldName.cfTurnstileResponse]: string;
};

export type FormActionData = ActionData<FieldName, Payload>;

type Payload = {
  messageSentSuccessfullyTs: number;
};
