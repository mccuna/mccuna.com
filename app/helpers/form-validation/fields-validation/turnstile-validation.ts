import { FieldError } from '~/types/action-data';

export const getTurnstileClientSideError = (
  turnstileResponse: string,
): FieldError => {
  if (!turnstileResponse || typeof turnstileResponse !== 'string') {
    return 'turnstileResponse is required';
  }
  return null;
};
