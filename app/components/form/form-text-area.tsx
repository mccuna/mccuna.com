import clsx from 'clsx';
import { FC, useId } from 'react';
import { useFormValidationContext } from '~/helpers/form-validation/form-validation-context';
import ErrorMessage, {
  ErrorMessageProps,
} from '../error-message/error-message';
import { Label, LabelProps } from './label';
import { StyledTextArea, StyledTextAreaProps } from './styled-text-area';

export type FormTextAreaProps = {
  containerProps?: {
    className?: string;
  };
  id?: string;
  textAreaProps: Omit<
    StyledTextAreaProps,
    'id' | 'hasError' | 'name' | 'defaultValue'
  > & {
    name: string;
    defaultValue?: string;
  };
  labelProps?: Omit<LabelProps, 'id' | 'hasError'>;
  errorProps?: Omit<ErrorMessageProps, 'errorMessage'>;
};

export const FormTextArea: FC<FormTextAreaProps> = ({
  id: customId,
  containerProps,
  textAreaProps,
  errorProps,
  labelProps,
}) => {
  const defaultId = useId();
  const id = customId ?? defaultId;

  const { getError } = useFormValidationContext();

  const errorMessage = getError(textAreaProps.name);

  return (
    <div
      className={clsx('flex flex-col group py-2', containerProps?.className)}>
      {labelProps && (
        <Label id={id} hasError={!!errorMessage} {...labelProps} />
      )}
      <StyledTextArea
        id={id}
        hasError={!!errorMessage}
        {...(textAreaProps as StyledTextAreaProps)}
      />
      {!!errorMessage && (
        <ErrorMessage errorMessage={errorMessage} {...errorProps} />
      )}
    </div>
  );
};
