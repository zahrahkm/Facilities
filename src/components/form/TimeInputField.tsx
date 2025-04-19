
import { useEffect, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormLabel } from './FormLabel';
import { FormError } from './FormError';

type TimeInputProps = {
  label: string;
  registration: UseFormRegisterReturn;
  defaultValue?: string;
  error?: FieldError;
};

export default function TimeInput({ label, registration, defaultValue,error }: TimeInputProps) {
  const [time, setTime] = useState<string>(defaultValue || ''); 

  useEffect(() => {
    if (defaultValue) {
      setTime(defaultValue);
    }
  }, [defaultValue]);

  const handleTimeChange = (date: Date | null) => {
    const hours = date?.getHours()?.toString().padStart(2, '0');
    const minutes = date?.getMinutes()?.toString().padStart(2, '0');
    const formatted = `${hours}:${minutes}`;
    setTime(formatted);

    registration.onChange({
      target: {
        name: registration.name,
        value: formatted,
      },
    });
  };

  return (
    <div className="relative">
      <FormLabel>{label}</FormLabel>
      <DatePicker
        selected={time ? new Date(`1970-01-01T${time}:00`) : null} 
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        className="h-6 md:h-8 input-base"
      />
      {error && <FormError message={error?.message} />}
    </div>
  );
}
