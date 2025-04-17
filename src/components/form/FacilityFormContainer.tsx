import { ReactNode } from "react";
import { HeaderLabel } from "../HeaderLabel";
import { FacilityForm, FormData } from "./FacilityForm";


type FormContainerProps = {
  label: string;
  onSubmit: (data: FormData) => void;
  submitLabel: string;
  children?: ReactNode;
  data?:FormData
}

export const FormContainer = ({ label, onSubmit, submitLabel, children,data }: FormContainerProps) => {
  return (
    <div className="form-container">
      <HeaderLabel className="px-2">{label}</HeaderLabel>
      <FacilityForm onSubmit={onSubmit} submitLabel={submitLabel} initialData={data}/>
      {children}
    </div>
  );
};


