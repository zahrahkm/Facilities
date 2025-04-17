import clsx from "clsx";

type BodyStrongTextProps={
    children: React.ReactNode;
    className?: string; 
}
  
export const BodyStrongText = ({ children, className }: BodyStrongTextProps) => (
  <span className={clsx("text-body-strong whitespace-nowrap", className)}>
      {children}
    </span>
);
  