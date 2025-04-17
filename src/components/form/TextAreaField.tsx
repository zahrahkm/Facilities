import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import clsx from 'clsx';
import { FormError } from './FormError';

type TextAreaFieldProps = {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  className?: string;
};

export const TextAreaField = ({
  label,
  error,
  registration,
  className = '',
}: TextAreaFieldProps) => (
  <div>
    <FormLabel>
      {label}
    </FormLabel>
    <textarea
      {...registration}
      className={clsx('textarea', className)}
    />
    {error &&  <FormError message={error?.message} />}
  </div>
);
