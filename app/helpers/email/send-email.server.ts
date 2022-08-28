import { logError } from '~/utils/log-error.server';
import { MailersendMail } from './mailersend-mail';

export const sendEmail = async (mail: MailersendMail) => {
  const response = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${MAILERSEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  });

  if (response.status !== 202) {
    await logError({
      statusCode: response.status,
      message: await response.text(),
    });
  }
};
