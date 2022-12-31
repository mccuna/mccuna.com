import { Toucan } from 'toucan-js';
import { Env } from '~/types/env';
import { mailersendAbsoluteApiUrls } from './mailersend-constants';
import { MailersendMail } from './mailersend-mail';

export type SendMailArgs = {
  mail: MailersendMail;
  env: Env;
  sentry: Toucan;
};

export const sendEmail = async ({ mail, env, sentry }: SendMailArgs) => {
  console.log(env.SHOULD_SKIP_SENDING_MAILS);
  if (env.SHOULD_SKIP_SENDING_MAILS === 'true') {
    return;
  }

  console.log('Hit');

  const response = await fetch(mailersendAbsoluteApiUrls.email, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.MAILERSEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  });

  if (response.status !== 202) {
    const sentryRequestPayload = {
      statusCode: response.status,
      responseText: await response.text(),
    };
    sentry.captureMessage(JSON.stringify(sentryRequestPayload));
    sentry.captureMessage(JSON.stringify(mail));
  }
};
