import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import clsx from 'clsx';
import { FormError } from './FormError';

type InputFieldProps = {
  label: string;
  type?: string;
  pattern?: string;
  placeholder?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  className?: string;
};

export const InputField = ({
  label,
  type = 'text',
  pattern,
  placeholder,
  onInput,
  error,
  registration,
  className = '',
}: InputFieldProps) => (
  <div>
    <FormLabel> {label}</FormLabel>
    <input
      type={type}
      pattern={pattern}
      placeholder={placeholder}
      onInput={onInput}
      {...registration}
      className={clsx("input-base", className)}
    />
    {error &&  <FormError message={error?.message} />}
  </div>
);
