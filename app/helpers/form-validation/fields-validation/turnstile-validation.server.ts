import { FieldError } from '~/types/action-data';
import { getTurnstileClientSideError } from './turnstile-validation';

type GetTurnstileErrorArgs = {
  turnstileResponse: string;
  ipAddress: string;
  TURNSTILE_SECRET_KEY: string;
};

export const getTurnstileError = async ({
  TURNSTILE_SECRET_KEY,
  ipAddress,
  turnstileResponse,
}: GetTurnstileErrorArgs): Promise<FieldError> => {
  const clientSideError = getTurnstileClientSideError(turnstileResponse);
  if (clientSideError) {
    return clientSideError;
  }

  return await verifyTurnstileResponse({
    TURNSTILE_SECRET_KEY,
    ipAddress,
    turnstileResponse,
  });
};

const verifyTurnstileResponse = async ({
  TURNSTILE_SECRET_KEY,
  ipAddress,
  turnstileResponse,
}: GetTurnstileErrorArgs): Promise<FieldError> => {
  const formData = new FormData();
  formData.append('response', turnstileResponse);
  formData.append('remoteip', ipAddress);
  formData.append('secret', TURNSTILE_SECRET_KEY);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const response = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const responseText = await response.text();
  if (!responseText) {
    return 'An error has occurred while validating the Turnstile token. Please try again.';
  }

  const outcome = JSON.parse(responseText) as TurnstileVerificationResponse;

  if (outcome.success) {
    return null;
  }

  return 'An error has occurred while validating the Turnstile response.';
};

type TurnstileErrorCode =
  // 	Your secret key is missing.
  | 'missing-input-secret'
  // Your secret key is invalid or malformed.
  | 'invalid-input-secret'
  // 	The response parameter (verification token) is missing.
  | 'missing-input-response'
  // The response parameter (verification token) is invalid or malformed.
  | 'invalid-input-response'
  // 	The request is invalid or malformed.
  | 'bad-request'
  // The response parameter has already been validated before.
  | 'timeout-or-duplicate'
  // An internal error happened while validating the response. The request can be retried.
  | 'internal-error';

type TurnstileVerificationResponse = {
  // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
  success: boolean;
  // the ISO timestamp for the time the challenge was solved.
  challenge_ts: string;
  // the hostname of the site where the challenge was solved
  hostname: string;
  // the list of errors that occurred.
  'error-codes': TurnstileErrorCode[];
  // the customer widget identifier passed to the widget on the client side. This is used to differentiate widgets using the same sitekey in analytics. Its integrity is protected by modifications from an attacker. It is recommended to validate that the action matches an expected value.
  action: string;
  //  the customer data passed to the widget on the client side. This can be used by the customer to convey state. It is integrity protected by modifications from an attacker.
  cdata: string;
};
