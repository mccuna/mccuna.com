export type Errors<TFormFieldKey extends string> = Partial<
  Record<TFormFieldKey, FieldError>
>;

export type ActionData<TFormFieldKey extends string, TPayload = unknown> = {
  fields: ActionDataFields<TFormFieldKey>;
  fieldErrors: Errors<TFormFieldKey>;
  formErrors: string[];
  payload?: TPayload;
};

export type ActionDataFields<TFormFieldKey extends string> = Record<
  TFormFieldKey,
  string
>;

export type FieldError = string | null;

export type GetFieldsErrors<TFormFieldKey extends string> = (
  fields: ActionDataFields<TFormFieldKey>,
) => Promise<Errors<TFormFieldKey>>;

export type ValidationStatus = 'valid' | 'invalid';
