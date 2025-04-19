import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import clsx from 'clsx';
import { FormError } from './FormError';

type InputFieldProps = {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number'; 
  error?: FieldError;
  registration: UseFormRegisterReturn;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = (
  {
    label,
    type = 'text',
    error,
    registration,
    className = '',
    ...props
  }: InputFieldProps
) => (
  <div>
    <FormLabel>{label}</FormLabel>
    <input
      type={type}
      onBlur={registration.onBlur}
      name={registration.name}
      onChange={registration.onChange}
      className={clsx('input-base', className)}
      {...props}
    />
    {error && <FormError message={error?.message} />}
  </div>
);
