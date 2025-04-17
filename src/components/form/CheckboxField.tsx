import { UseFormRegisterReturn } from 'react-hook-form';

type CheckboxFieldProps = {
  label: string;
  description?: string;
  registration: UseFormRegisterReturn;
  disabled?:boolean
};

export const CheckboxField = ({ label, description, registration,disabled }: CheckboxFieldProps) => (
  <label className="flex flex-row items-center gap-2 px-0 py-2 md:w-[546px] md:h-14 flex-none order-4">
    <input
      type="checkbox"
      {...registration}
      className="checkbox"
      disabled={disabled}
    />
    <div className="flex flex-col justify-center items-start gap-[2px]">
      <span className="text-sm font-normal text-textDefault flex-none order-0">{label}</span>
      {description && <div className="text-sm font-normal text-textDefaultSecondary leading-[1.4] flex-none order-1">{description}</div>}
    </div>
  </label>
);
