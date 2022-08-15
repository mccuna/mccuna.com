import { FieldError } from '~/types/action-data';

export const getEmailClientSideError = (email: string): FieldError => {
  if (!email || typeof email !== 'string') {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return 'Invalid Email';
  }

  return null;
};
