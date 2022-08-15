import { externalLinks } from '~/constants/external-links';
import { FieldError } from '~/types/action-data';
import { getHCaptchaClientSideError } from './hcaptcha-validation';

export const getHCaptchaError = async (
  hcaptchaResponse: string,
): Promise<FieldError> => {
  const clientSideError = getHCaptchaClientSideError(hcaptchaResponse);
  if (!!clientSideError) {
    return clientSideError;
  }

  return await verifyHCaptchaResponse(hcaptchaResponse);
};

const verifyHCaptchaResponse = async (
  hcaptchaResponse: string,
): Promise<FieldError> => {
  const payload: HCaptchaVerifyPayload = {
    response: hcaptchaResponse,
    secret: HCAPTCHA_SITE_SECRET,
    sitekey: HCAPTCHA_SITE_KEY,
  };

  const data = new URLSearchParams(payload).toString();

  const response = await fetch(externalLinks.hCaptchaVerifyUrl, {
    body: data,
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'content-length': data.length.toString(),
    },
  });

  const responseText = await response.text();
  if (!responseText) {
    return 'An error has occurred while validating the Captcha token. Please try again.';
  }

  const verifyResponse = JSON.parse(responseText) as HCaptchaVerifyResponse;

  if (verifyResponse.success) {
    return null;
  }

  // TODO: log error

  return "An error has occurred while validating the Captcha token. I've logged the error and I'll look into it as soon as possible.";
};

type HCaptchaVerifyPayload = {
  response: string;
  secret: string;
  sitekey: string;
};

type HCaptchaErrorCode =
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
  // he response parameter has already been checked, or has another issue.
  | 'invalid-or-already-seen-response'
  // You have used a testing sitekey but have not used its matching secret.
  | 'not-using-dummy-passcode'
  // he sitekey is not registered with the provided secret.
  | 'sitekey-secret-mismatch';

type HCaptchaVerifyResponse = {
  success: boolean; // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
  challenge_ts: string; // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the challenge was solved
  credit: boolean; // optional: whether the response will be credited
  'error-codes': HCaptchaErrorCode[]; // optional: any error codes
  score: number; // ENTERPRISE feature: a score denoting malicious activity.
  score_reason: string[]; // ENTERPRISE feature: reason(s) for score.
};
