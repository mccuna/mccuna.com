import clsx from 'clsx';
import { FC, useId } from 'react';
import { useFormValidationContext } from '~/helpers/form-validation/form-validation-context';
import ErrorMessage, {
  ErrorMessageProps,
} from '../error-message/error-message';

import { Label, LabelProps } from './label';
import { StyledInput, StyledInputProps } from './styled-input';

export type FormInputProps = {
  containerProps?: {
    className?: string;
  };
  id?: string;
  inputProps: Omit<
    StyledInputProps,
    'id' | 'hasError' | 'name' | 'defaultValue'
  > & {
    name: string;
    defaultValue?: string;
  };
  labelProps?: Omit<LabelProps, 'id' | 'hasError'>;
  errorProps?: Omit<ErrorMessageProps, 'errorMessage'>;
};

export const FormInput: FC<FormInputProps> = ({
  containerProps,
  id: customId,
  inputProps,
  labelProps,
  errorProps,
}) => {
  const defaultId = useId();
  const id = customId ?? defaultId;

  const { getError } = useFormValidationContext();

  const errorMessage = getError(inputProps.name);

  return (
    <div className={clsx('flex flex-col py-2', containerProps?.className)}>
      <div className='flex flex-col group peer'>
        {labelProps && (
          <Label id={id} hasError={!!errorMessage} {...labelProps} />
        )}
        <StyledInput
          id={id}
          hasError={!!errorMessage}
          {...(inputProps as StyledInputProps)}
        />
      </div>
      {!!errorMessage && (
        <ErrorMessage errorMessage={errorMessage} {...errorProps} />
      )}
    </div>
  );
};
