import { FieldError } from '~/types/action-data';
import { getEmailClientSideError } from './email-validation';

type GetEmailErrorArgs = {
  email: string;
  domainVerificationConfig?: {
    apiKey: string;
  };
};

export const getEmailError = async ({
  email,
  domainVerificationConfig,
}: GetEmailErrorArgs): Promise<FieldError> => {
  const clientSideError = getEmailClientSideError(email);
  if (!!clientSideError) {
    return clientSideError;
  }

  if (!!domainVerificationConfig) {
    const verificationResult = await verifyEmail({
      email,
      apiKey: domainVerificationConfig.apiKey,
    });

    return verificationResult.status ? null : 'Invalid Email';
  }

  return null;
};

type VerifyEmailAddressArgs = {
  email: string;
  apiKey: string;
};

const verifyEmail = async ({
  apiKey,
  email,
}: VerifyEmailAddressArgs): Promise<VerifierResult> => {
  const verifierUrl = new URL(
    `https://verifier.meetchopra.com/verify/${email}`,
  );
  verifierUrl.searchParams.append('token', apiKey);

  const response = await fetch(verifierUrl.toString());

  const verifierResult: VerifierResult = await response.json();

  return verifierResult;
};

type VerifierResult =
  | { status: true; email: string; domain: string }
  | {
      status: false;
      error: { code: number; message: string };
    };
