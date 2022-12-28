import { Toucan } from 'toucan-js';
import { mailersendAbsoluteApiUrls } from './mailersend-constants';
import { MailersendMail } from './mailersend-mail';

export type SendMailArgs = {
  mail: MailersendMail;
  config: {
    mailerSendApiKey: string;
  };
  sentry: Toucan;
};

export const sendEmail = async ({ mail, config, sentry }: SendMailArgs) => {
  const { mailerSendApiKey } = config;

  const response = await fetch(mailersendAbsoluteApiUrls.email, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${mailerSendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  });

  if (response.status !== 202) {
    const sentryPayload = {
      statusCode: response.status,
      message: await response.text(),
    };
    sentry.captureMessage(JSON.stringify(sentryPayload));
  }
};
