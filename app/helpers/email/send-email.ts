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
    // TODO: log error
    throw new Error('Email failed to send');
  }

  return;
};
