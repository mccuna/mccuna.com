export const getRequestOrigin = (request: Request): string => {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');
  if (!host) {
    throw new Error('Could not identify the request host');
  }

  const protocol = host.includes('localhost') ? 'http' : 'https';

  return `${protocol}://${host}`;
};
