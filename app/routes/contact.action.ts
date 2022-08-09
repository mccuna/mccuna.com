import { ActionArgs } from '@remix-run/cloudflare';

export const action = async ({}: ActionArgs) => {};

export enum FieldName {
  name = 'name',
  email = 'email',
  subject = 'subject',
  message = 'message',
}

type FormFields = {
  [FieldName.name]: string;
  [FieldName.email]: string;
  [FieldName.subject]: string;
  [FieldName.message]: string;
};
