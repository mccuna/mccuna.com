import { logError } from '~/utils/log-error.server';
import { MailersendMail } from './mailersend-mail';

export type SendMailArgs = {
  mail: MailersendMail;
  config: {
    mailerSendApiKey: string;
    faunaDomain: string;
    faunaSecret: string;
  };
};

export const sendEmail = async ({ mail, config }: SendMailArgs) => {
  const { mailerSendApiKey, ...faunaConfig } = config;

  const response = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${mailerSendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  });

  if (response.status !== 202) {
    await logError({
      errorLog: {
        statusCode: response.status,
        message: await response.text(),
      },
      config: faunaConfig,
    });
  }
};
