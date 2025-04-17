type FormErrorProps = {
    message?: string;
  };
  
export const FormError = ({ message }: FormErrorProps) => {
if (!message) return null;

return <p className="mt-1 text-form-value text-dangerText">{message}</p>;
};
  