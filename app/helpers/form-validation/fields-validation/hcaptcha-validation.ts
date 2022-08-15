import { FieldError } from '~/types/action-data';

export const getHCaptchaClientSideError = (
  hcaptchaResponse: string,
): FieldError => {
  if (!hcaptchaResponse || typeof hcaptchaResponse !== 'string') {
    return 'Captcha is required';
  }
  return null;
};
