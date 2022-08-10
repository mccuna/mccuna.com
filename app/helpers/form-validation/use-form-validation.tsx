import { useTransition } from '@remix-run/react';
import { FormEvent, FormEventHandler, useMemo, useState } from 'react';
import { Errors, FieldError, ValidationStatus } from '~/types/action-data';
import { FormValidationContextType } from './form-validation-context';

export type ValidationRule = (
  value: string,
  form: HTMLFormElement,
) => FieldError;

export type ValidationRules<TFormField extends string> = Partial<
  Record<TFormField, ValidationRule>
>;

export type UseFormArgs<TFormFieldKey extends string> = {
  validationRules: ValidationRules<TFormFieldKey>;
  serverSideErrors: Errors<TFormFieldKey> | undefined;
};

export const useFormValidation = <TFormFieldKey extends string>({
  validationRules,
  serverSideErrors,
}: UseFormArgs<TFormFieldKey>): {
  errors: Errors<TFormFieldKey>;
  isSubmitted: boolean;
  formEventHandlers: {
    onSubmit: FormEventHandler<HTMLFormElement>;
    onChange: FormEventHandler<HTMLFormElement>;
    onBlur: FormEventHandler<HTMLFormElement>;
  };
  formValidationContextValue: FormValidationContextType<TFormFieldKey>;
  reset: (form: HTMLFormElement) => void;
} => {
  const emptyErrorsObject = useMemo(
    () => getEmptyErrorsObj<TFormFieldKey>(validationRules),
    [validationRules],
  );

  const [errors, setErrors] =
    useState<Errors<TFormFieldKey>>(emptyErrorsObject);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const transition = useTransition();

  if (transition.type === 'actionReload' && serverSideErrors) {
    if (!areTheSame(errors, serverSideErrors)) {
      // Hydrate errors with the ones from the action data if different
      setErrors(serverSideErrors);
    }
  }

  const validateForm = (
    event: FormEvent<HTMLFormElement>,
  ): ValidationStatus => {
    const form = event.currentTarget;

    const validationRulesEntries = Object.entries(validationRules) as [
      TFormFieldKey,
      ValidationRule,
    ][];

    const newErrorsEntries = validationRulesEntries.map(
      ([field, validationRule]) => {
        const errMsg = validationRule(form[field].value, form);
        return [field, errMsg] as [TFormFieldKey, FieldError];
      },
    );

    if (
      newErrorsEntries.length === 0 ||
      newErrorsEntries.every(([, errMsg]) => !errMsg)
    ) {
      // No errors, so submit the form
      setErrors(emptyErrorsObject);
      return 'valid';
    }

    const newErrors = newErrorsEntries.reduce(
      (newErrorsAcc, [field, errMsg]) => {
        if (errMsg) {
          // eslint-disable-next-line no-param-reassign
          newErrorsAcc[field] = errMsg;
        }
        return newErrorsAcc;
      },
      {} as Errors<TFormFieldKey>,
    );


    if (!areTheSame(errors, newErrors)) {
      /* Update the errors state only if the new errors are different
       * from the current ones. Otherwise we'll just get redundant re-renders
       */
      setErrors(newErrors);
    }

    return 'invalid';
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    setIsSubmitted(true);

    const validationResult = validateForm(event);

    if (validationResult === 'invalid') {
      event.preventDefault();
    }
  };

  const onChange: FormEventHandler<HTMLFormElement> = (event) => {
    if (!isSubmitted) {
      return;
    }

    validateForm(event);
  };

  const onBlur: FormEventHandler<HTMLFormElement> = (event) => {
    if (!isSubmitted) {
      return;
    }
    validateForm(event);
  };

  const formValidationContextValue = useMemo(() => {
    return { errors };
  }, [errors]);

  const reset = (form: HTMLFormElement) => {
    form.reset();
    setIsSubmitted(false);
  };

  return {
    errors,
    isSubmitted,
    formEventHandlers: {
      onSubmit,
      onChange,
      onBlur,
    },
    formValidationContextValue,
    reset,
  };
};

const areTheSame = <TFormField extends string>(
  errors: Errors<TFormField>,
  newErrors: Errors<TFormField>,
) => {
  const errorsFieldNames = Object.keys(errors) as TFormField[];
  const newErrorsFieldNames = Object.keys(newErrors) as TFormField[];

  if (errorsFieldNames.length !== newErrorsFieldNames.length) {
    return false;
  }

  return errorsFieldNames.every((fieldName) => {
    return errors[fieldName] === newErrors[fieldName];
  });
};

const getEmptyErrorsObj = <TFormField extends string>(
  validationRules: ValidationRules<TFormField>,
): Errors<TFormField> => {
  const formFieldsWithValidation = Object.keys(validationRules) as TFormField[];

  return formFieldsWithValidation.reduce((acc, field) => {
    acc[field] = null;
    return acc;
  }, {} as Errors<TFormField>);
};
