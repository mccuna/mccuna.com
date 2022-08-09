import * as React from 'react';
import { Errors } from '~/types/action-data';

export type FormValidationContextType<TFormFieldKey extends string = string> = {
  errors: Errors<TFormFieldKey>;
};

export const FormValidationContext =
  React.createContext<FormValidationContextType | null>({
    errors: {},
  });

FormValidationContext.displayName = 'FormValidationContext';

export const useFormValidationContext = () => {
  const context = React.useContext(FormValidationContext);
  if (!context) {
    throw new Error(
      'useFormValidationContext must be used within a FormValidationContext',
    );
  }

  const { errors } = context;

  const getError = (name: string) => {
    return errors[name];
  };

  return { getError };
};
