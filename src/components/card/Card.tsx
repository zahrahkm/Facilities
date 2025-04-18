import clsx from "clsx";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    ariaLabel?: string;
  };
  
export const Card = ({ children, className = '',ariaLabel }: CardProps) => (
    <section role="region" tabIndex={0} aria-label={ariaLabel} className={ clsx('card',{className})}>
        {children}
    </section>
);
  