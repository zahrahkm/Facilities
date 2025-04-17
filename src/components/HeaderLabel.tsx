
type HeaderLabelProps={
    children: React.ReactNode;
    className?: string; 
}
  
export const HeaderLabel = ({ children, className }: HeaderLabelProps) => (
    <label className={`text-header ${className ? className : ''}`}>
    {children}
  </label>
);
  

