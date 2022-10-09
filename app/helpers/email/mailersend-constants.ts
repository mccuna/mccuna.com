export const mailersendApiConfig = {
  baseUrl: 'https://api.mailersend.com',
  endpoints: {
    email: 'v1/email',
  },
};

type MailersendEndpoint = keyof typeof mailersendApiConfig['endpoints'];

export const mailersendAbsoluteApiUrls = Object.entries(
  mailersendApiConfig.endpoints,
).reduce((acc, [endpointName, path]) => {
  acc[
    endpointName as MailersendEndpoint
  ] = `${mailersendApiConfig.baseUrl}/${path}`;
  return acc;
}, {} as Record<MailersendEndpoint, string>);
