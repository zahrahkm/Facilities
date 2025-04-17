import clsx from "clsx";

type FormLabelProps={
    children: React.ReactNode;
    className?: string; 
}
  
export const FormLabel = ({ children, className='' }: FormLabelProps) => (
    <label className={clsx(`w-[78px] h-4 text-form-label text-textDefault`,className) }>
    {children}
  </label>
);
  

