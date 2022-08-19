import { ActionDataFields, Errors } from '~/types/action-data';

export const getActionDataFields = async <TFormFieldKey extends string>(
  request: Request,
): Promise<ActionDataFields<TFormFieldKey>> => {
  const formData = await request.formData();

  return Object.fromEntries(formData) as ActionDataFields<TFormFieldKey>;
};

export const areFieldsValid = <
  TFormFieldKey extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TValidForm extends Record<TFormFieldKey, any>,
>(
  fields: ActionDataFields<TFormFieldKey>,
  fieldErrors: Errors<TFormFieldKey>,
): fields is TValidForm => {
  const errors = Object.values(fieldErrors);
  return errors.every((err) => !err);
};
