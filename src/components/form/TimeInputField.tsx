
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
    const timeString = date ? date.toTimeString().slice(0, 5) : '';
    setTime(timeString);

    registration.onChange({
      target: {
        name: registration.name,
        value: timeString,
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
        dateFormat="HH:mm"
        className="h-6 md:h-8 input-base"
      />
      {error && <FormError message={error?.message} />}
    </div>
  );
}
